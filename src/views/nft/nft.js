import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import Carousel from '../../components/layout/carousel';
import './nft.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIndex } from '../../redux/slice/nft';
import CarouselContainer from '../../components/home-item/carouselContainer';
import { useEffect, useState } from 'react';
import { Connection, clusterApiUrl } from "@solana/web3.js"
import { GetClusterUrl } from '../../utils/cluster';
import { Secret2Keypair, SecretString2Secret } from '../../utils/wallet';
import { TOKEN_PROGRAM_ID } from '../../const';
import { FindTokenFromSolanaTokenList } from '../../utils/token'
import axios from "axios"
import { setCurrentToken } from '../../redux/slice/token';

const NFT = (props) => {
  const auth = useSelector(state => state.auth)
  const nftIndex = useSelector(state => state.nft.index)
  const network = useSelector(state => state.cluster.network)
  const dispatch = useDispatch()

  const [nftList, setNftList] = useState([])
  const [connection, setConnection] = useState(new Connection(clusterApiUrl(GetClusterUrl(network))))

  useEffect(() => {
    setConnection(new Connection(clusterApiUrl(GetClusterUrl(network))))
  }, [network]);

  const fetchNft = async () => {
    dispatch(setCurrentToken(null))

    const keypair = Secret2Keypair(SecretString2Secret(auth.secret))
    const nfts = await connection.getParsedTokenAccountsByOwner(keypair.publicKey, {
      programId: TOKEN_PROGRAM_ID,
    })

    const nftAccounts = nfts.value.filter(({ account }) => {
      const amount = account?.data?.parsed?.info?.tokenAmount?.uiAmount;
      const decimals = account?.data?.parsed?.info?.tokenAmount?.decimals;

      return decimals === 0 && amount > 0;
    });

    let nftItems = [];
    for (let i = 0; i < nftAccounts.length; i++) {
      const mint = nftAccounts[i]?.account?.data?.parsed?.info?.mint
      const metadataPDA = await Metadata.getPDA(mint);
      const tokenMetadata = await Metadata.load(connection, metadataPDA);

      const alternateTokenMetadata = FindTokenFromSolanaTokenList(mint)
      let imgURI = tokenMetadata.data.data.uri;
      if (tokenMetadata.data.data.uri === "" || tokenMetadata.data.data.uri === null) {
        imgURI = alternateTokenMetadata.logoURI
      }

      if(imgURI.indexOf("arweave") !== -1) {
        const { data } = await axios.get(imgURI);
        imgURI = data.image
      }

      nftItems.push({
        address: mint,
        decimals: nftAccounts[i]?.account?.data?.parsed?.info?.tokenAmount?.decimals,
        img: imgURI,
        title: tokenMetadata.data.data.name,
        desc: `Symbol: ${tokenMetadata.data.data.symbol}`
      })
    }

    if (nftItems.length > 0) {
      let originalLength = nftItems.length;
      while (nftItems.length <= 5) {
        for (let i = 0; i < originalLength; i++) {
          nftItems.push(nftItems[i])
        }
      }
      dispatch(setCurrentToken(nftItems[0]))
    }
    setNftList(nftItems)
  }

  useEffect(() => {
    fetchNft()
  }, [connection, auth.secret]);

  const moveLeft = () => {
    const newIndex = nftIndex - 1 < 0 ? nftList.length - 1 : nftIndex - 1
    dispatch(setIndex(newIndex))
    dispatch(setCurrentToken(nftList[newIndex]))
    clearFlipped()
  }

  const moveRight = () => {
    const newIndex = (nftIndex + 1) % nftList.length
    dispatch(setIndex(newIndex))
    dispatch(setCurrentToken(nftList[newIndex]))
    clearFlipped()
  }

  const clearFlipped = () => {
    const flipped = document.getElementsByClassName("flip")
    for(let i = 0; i < flipped.length; i++) {
      flipped[i].classList.remove("flip")
    }
  }

  const NoNFT = () => {
    return (
      <div className='w-100 flex items-center justify-center'>
        No NFT
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <CarouselContainer>
        {
          (nftList.length === 0) ? <NoNFT /> : <Carousel active={nftIndex} direction="left" elementName={'NFTItem'} items={nftList} />
        }
      </CarouselContainer>
      <Footer onClickPrevious={moveLeft} refreshItem={fetchNft} onClickNext={moveRight} />
    </div>
  );
}

export default NFT;