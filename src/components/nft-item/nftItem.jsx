import '../../views/nft/nft.css';
import dummyWallpaper from "../../resources/dummyWallpaper.png"
import { useState } from "react";

const NFTItem = (props) => {
    var className = 'item level' + props.level
    return(
        <div className={className}>
            <div className="nftContainer text-center">
                <img className="image" src={dummyWallpaper}/>
                <p className="title">{props.id}</p>
                <p className="description">SamoyedCoin</p>
            </div>
        </div>
    )
}
export default NFTItem