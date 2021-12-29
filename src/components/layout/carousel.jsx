import HomeItem from "../home-item/homeItem";
import { useState } from "react";
import {TransitionGroup} from "react-transition-group"
import { CSSTransition } from "react-transition-group";
import leftIcon from "../../resources/arrow-back.svg"
import rightIcon from "../../resources/arrow-forward.svg"
import NFTItem from "../nft-item/nftItem";

const Carousel = (props) =>{
    const [active, setActive] = useState(props.active)
    const [items, setItems] = useState(props.items)
    const [direction, setDirection] = useState('')
    
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
            console.log(level)
            if(props.elementName === 'HomeItem'){
                itemList.push(
                    <CSSTransition key={index} classNames={direction} timeout={{ enter: 1000, exit: 1000 }}>
                         <HomeItem key={index} id={items[index]} level={level} />
                    </CSSTransition>
                )
            }
            if(props.elementName === 'NFTItem'){
                itemList.push(
                    <CSSTransition key={index} classNames={direction} timeout={{ enter: 1000, exit: 1000 }}>
                         <NFTItem key={index} id={items[index]} level={level} />
                    </CSSTransition>
                )
            }
           
        }
        return itemList
    }

    const moveLeft = () => {
        var newActive = active
        newActive--
        setActive(newActive < 0 ? items.length - 1 : newActive)
        setDirection('left')
    }
    
    const moveRight = () => {
        var newActive = active
        setActive((newActive + 1) % items.length)
        setDirection('right')
    }

    const rightClick = moveRight.bind(Carousel)
    const leftClick = moveLeft.bind(Carousel)
    
    return(
        <div className="carousel">
            <TransitionGroup className="flex justify-center"> 
                {generateItems()}
            </TransitionGroup>
            <div className="arrow arrow-left" onClick={leftClick}><img src={leftIcon}/></div>
            <div className="arrow arrow-right" onClick={rightClick}><img src={rightIcon}/></div>
        </div>
    )
}
export default Carousel

