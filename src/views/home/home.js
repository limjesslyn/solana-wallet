import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import Item from '../../components/layout/item';
import './home.css';

const Home = (props) => {
  return (
    <div>
      <Navbar/>
      This is Home
      <Item/>
      <Footer/>
    </div>
  );
}

export default Home;
