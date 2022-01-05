import Navbar from '../../components/layout/navbar';
import Footer from '../../components/layout/footer';
import Carousel from '../../components/layout/carousel';
import './nft.css';

const NFT = (props) => {
    var items = ['IU Sketch', 'IU Sketch 2', 'IU Sketch 3']
    var length = items.length
    if(length < 5){
      for(var i = 0; i < length; i++){
        items.push(items[i])
      }
    }
    return (
      <div>
        <Navbar/>
        <Carousel elementName={'NFTItem'} items={items} active={0}/>
        <Footer/>
      </div>
    );
  }
  
  export default NFT;