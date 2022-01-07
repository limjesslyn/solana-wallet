import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import Carousel from '../../components/layout/carousel';
import './nft.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIndex } from '../../redux/slice/nft';
import CarouselContainer from '../../components/home-item/carouselContainer';

const NFT = (props) => {
  const nftIndex = useSelector(state => state.nft.index)
  const dispatch = useDispatch()

  var items = ['IU Sketch', 'IU Sketch 2', 'IU Sketch 3', 'IU Sketch 4',  'IU Sketch 5', 'IU Sketch 6', 'IU Sketch 7', 'IU Sketch 8', 'IU Sketch 9', 'IU Sketch 10']
  var length = items.length
  if (length < 5) {
    for (var i = 0; i < length; i++) {
      items.push(items[i])
    }
  }

  const moveLeft = () => {
    dispatch(setIndex(nftIndex - 1 < 0 ? items.length - 1 : nftIndex - 1))
  }

  const moveRight = () => {
    dispatch(setIndex((nftIndex + 1) % items.length))
  }

  return (
    <div>
      <Navbar />
      <CarouselContainer>
        <Carousel active={nftIndex} direction="left" elementName={'NFTItem'} items={items} />
      </CarouselContainer>
      <Footer onClickPrevious={moveLeft} onClickNext={moveRight} />
    </div>
  );
}

export default NFT;