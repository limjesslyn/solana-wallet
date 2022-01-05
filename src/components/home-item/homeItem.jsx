import styling from "../../views/home/home.css"
import { useState } from "react";

const HomeItem = (props) => {
    var className = 'item level' + props.level
    return(
        <div className={className}>
            <div className="imageContainer">
                <img className="image"/>
            </div>
            <div className="textContainer text-center">
                <p className="currency">{props.id}</p>
                <p className="coinName">SamoyedCoin</p>
                <p className="balance">Balance</p>
                <p className="balanceValue">100,000,000</p>
            </div>
        </div>
    )
}
export default HomeItem