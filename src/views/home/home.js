import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import Carousel from '../../components/layout/carousel';
import './home.css';

const Home = (props) => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default Home;
