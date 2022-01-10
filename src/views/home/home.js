import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import Carousel from '../../components/layout/carousel';
import './home.css';
import CarouselContainer from '../../components/home-item/carouselContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setIndex } from '../../redux/slice/token';

const Home = (props) => {
  const tokenIndex = useSelector(state => state.token.index)
  const dispatch = useDispatch()

  var items = [1, 2, 3, 4, 5, 6]
  var length = items.length
  if (length < 5) {
    for (var i = 0; i < length; i++) {
      items.push(items[i])
    }
  }

  const moveLeft = () => {
    dispatch(setIndex(tokenIndex - 1 < 0 ? items.length - 1 : tokenIndex - 1))
  }

  const moveRight = () => {
    dispatch(setIndex((tokenIndex + 1) % items.length))
  }

  return (
    <div>
      <Navbar />
      <CarouselContainer>
        <Carousel active={tokenIndex} elementName={'HomeItem'} items={items} />
      </CarouselContainer>
      <Footer onClickPrevious={moveLeft} onClickNext={moveRight} />
    </div>
  );
}

export default Home;
