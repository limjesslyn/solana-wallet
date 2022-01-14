import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import Carousel from '../../components/layout/carousel';
import './home.css';
import CarouselContainer from '../../components/home-item/carouselContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentToken, setIndex } from '../../redux/slice/token';
import { useEffect, useState } from 'react';
import { Connection, clusterApiUrl } from "@solana/web3.js"
import { GetClusterUrl } from '../../utils/cluster';
import { Secret2Keypair, SecretString2Secret } from '../../utils/wallet';
import { TOKEN_PROGRAM_ID } from '../../const';
import { FindTokenFromSolanaTokenList } from '../../utils/token'

const Home = (props) => {
  const auth = useSelector(state => state.auth)
  const tokenIndex = useSelector(state => state.token.index)
  const network = useSelector(state => state.cluster.network)
  const dispatch = useDispatch()

  const [tokenList, setTokenList] = useState([])
  const [connection, setConnection] = useState(new Connection(clusterApiUrl(GetClusterUrl(network))))

  useEffect(() => {
    setConnection(new Connection(clusterApiUrl(GetClusterUrl(network))))
  }, [network]);

  useEffect(() => {
    const fetchToken = async () => {
      dispatch(setCurrentToken(null))

      const keypair = Secret2Keypair(SecretString2Secret(auth.secret))
      const tokens = await connection.getParsedTokenAccountsByOwner(keypair.publicKey, {
        programId: TOKEN_PROGRAM_ID,
      })

      const tokenAccounts = tokens.value.filter(({ account }) => {
        const amount = account?.data?.parsed?.info?.tokenAmount?.uiAmount;
        const decimals = account?.data?.parsed?.info?.tokenAmount?.decimals;

        return decimals > 0 && amount > 0;
      });

      let tokenItems = [];
      for (let i = 0; i < tokenAccounts.length; i++) {
        const mint = tokenAccounts[i]?.account?.data?.parsed?.info?.mint
        let metadataPDA;
        let tokenMetadata;
        try {
          metadataPDA = await Metadata.getPDA(mint);
          tokenMetadata = await Metadata.load(connection, metadataPDA);
        } catch(_) {
          console.log("Failed to catch error")
        }

        const alternateTokenMetadata = FindTokenFromSolanaTokenList(mint)
        let imgURI = tokenMetadata?.data?.data?.uri;
        if (tokenMetadata?.data?.data?.uri === "" || tokenMetadata?.data?.data?.uri === null) {
          imgURI = alternateTokenMetadata.logoURI
        }

        tokenItems.push({
          address: mint,
          decimals: tokenAccounts[i]?.account?.data?.parsed?.info?.tokenAmount?.decimals,
          img: imgURI,
          title: tokenMetadata?.data?.data?.name,
          symbol: tokenMetadata?.data?.data?.symbol,
          balance: tokenAccounts[i]?.account?.data?.parsed?.info?.tokenAmount?.uiAmount
        })
      }

      const sol = await connection.getBalance(keypair.publicKey);
      tokenItems.push({
        address: "NATIVE",
        decimals: 9,
        img: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
        title: "Solana",
        symbol: "SOL",
        balance: sol / 1e9,
      })

      if (tokenItems.length > 0) {
        let originalLength = tokenItems.length;
        while (tokenItems.length <= 5) {
          for (let i = 0; i < originalLength; i++) {
            tokenItems.push(tokenItems[i])
          }
        }

        dispatch(setCurrentToken(tokenItems[0]))
      }
      setTokenList(tokenItems)
    }

    fetchToken()
  }, [connection, auth.secret]);

  const moveLeft = () => {
    const newIndex = tokenIndex - 1 < 0 ? tokenList.length - 1 : tokenIndex - 1
    dispatch(setIndex(newIndex))
    dispatch(setCurrentToken(tokenList[newIndex]))
  }

  const moveRight = () => {
    const newIndex = (tokenIndex + 1) % tokenList.length
    dispatch(setIndex(newIndex))
    dispatch(setCurrentToken(tokenList[newIndex]))
  }

  const NoToken = () => {
    return (
      <div className='w-100 flex items-center justify-center'>
        No Coin
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <CarouselContainer>
        {
          (tokenList.length === 0) ? <NoToken /> : <Carousel active={tokenIndex} direction="left" elementName={'HomeItem'} items={tokenList} />
        }
      </CarouselContainer>
      <Footer onClickPrevious={moveLeft} onClickNext={moveRight} />
    </div>
  );
}

export default Home;
