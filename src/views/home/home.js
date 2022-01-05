import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import Carousel from '../../components/layout/carousel';
import './home.css';

const Home = (props) => {
  var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  var length = items.length
  if(length < 5){
    for(var i = 0; i < length; i++){
      items.push(items[i])
    }
  }
  return (
    <div>
      <Navbar/>
      <Carousel elementName={'HomeItem'} items={items} active={0}/>
      <Footer/>
    </div>
  );
}

export default Home;
