import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import Carousel from '../../components/layout/carousel';
import './home.css';
import CarouselContainer from '../../components/home-item/carouselContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setIndex } from '../../redux/slice/token';
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
        const metadataPDA = await Metadata.getPDA(mint);
        const tokenMetadata = await Metadata.load(connection, metadataPDA);

        const alternateTokenMetadata = FindTokenFromSolanaTokenList(mint)
        let imgURI = tokenMetadata.data.data.uri;
        if (tokenMetadata.data.data.uri === "" || tokenMetadata.data.data.uri === null) {
          imgURI = alternateTokenMetadata.logoURI
        }

        tokenItems.push({
          img: imgURI,
          title: tokenMetadata.data.data.name,
          symbol: tokenMetadata.data.data.symbol,
          balance: tokenAccounts[i]?.account?.data?.parsed?.info?.tokenAmount?.uiAmount
        })
      }

      if (tokenItems.length > 0) {
        let originalLength = tokenItems.length;
        while (tokenItems.length < 5) {
          for (let i = 0; i < originalLength; i++) {
            tokenItems.push(tokenItems[i])
          }
        }
      }
      setTokenList(tokenItems)
    }

    fetchToken()
  }, [connection, auth.secret]);

  const moveLeft = () => {
    dispatch(setIndex(tokenIndex - 1 < 0 ? tokenList.length - 1 : tokenIndex - 1))
  }

  const moveRight = () => {
    dispatch(setIndex((tokenIndex + 1) % tokenList.length))
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
