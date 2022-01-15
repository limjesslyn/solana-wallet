import HomeItem from "../home-item/homeItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NFTItem from "../nft-item/nftItem";

const Carousel = ({ active, direction, items, elementName }) => {
    const generateItems = () => {
        var itemList = []
        var level
        for (var i = active - 2; i < active + 3; i++) {
            var index = i
            if (i < 0) {
                index = items.length + i
            } else if (i >= items.length) {
                index = i % items.length
            }
            level = active - i
            if (elementName === 'HomeItem') {
                itemList.push(
                    <CSSTransition key={index} classNames={direction} timeout={{ enter: 1000, exit: 1000 }}>
                        <HomeItem key={index} metadata={items[index]} level={level} />
                    </CSSTransition>
                )
            }
            if (elementName === 'NFTItem') {
                itemList.push(
                    <CSSTransition key={index} classNames={direction} timeout={{ enter: 1000, exit: 1000 }}>
                        <NFTItem key={index} metadata={items[index]} level={level} />
                    </CSSTransition>
                )
            }
        }
        return itemList
    }
    return (
        <div>
            <TransitionGroup>
                {generateItems()}
            </TransitionGroup>
        </div>)
}
export default Carousel

