import styling from "../../views/home/home.css"
import { useState } from "react";

const HomeItem = (props) => {
    const[level, setLevel] = useState(props.level)
    const[id, setID] = useState(props.id)
    var className = 'item level' + level
    return(
        <div className={className}>
            <div className="imageContainer">
                <img className="image"/>
            </div>
            <div className="textContainer text-center">
                <p className="currency">{id}</p>
                <p className="coinName">SamoyedCoin</p>
                <p className="balance">Balance</p>
                <p className="balanceValue">100,000,000</p>
            </div>
        </div>
    )
}
export default HomeItem