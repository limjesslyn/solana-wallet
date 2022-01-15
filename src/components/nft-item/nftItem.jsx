import "./nftItem.css"

const NFTItem = (props) => {
    return (
        <div className={'item nftLevel' + props.level}>
            <div className="nftContainer flex justify-center items-center" onClick={(e) => {
                if (props.level === 0) {
                    const nftLevel = document.getElementsByClassName("nftLevel0")[0]
                    if (nftLevel.children[0].classList.contains("flip")) {
                        nftLevel.children[0].classList.remove("flip");
                    } else {
                        nftLevel.children[0].classList.add("flip");
                    }
                }
            }}>
                <div className="w-full h-full p-3 transform-2 backside break-words">
                    &#123;
                    <div className="pl-4">
                        <p>
                            <span className="bg-gray-200 rounded-xl p-2">address</span>: {props.metadata.address}
                        </p>
                        <p className="mt-2">
                            <span className="bg-gray-200 rounded-xl p-2">image</span>: {props.metadata.img}
                        </p>
                        <p className="mt-2">
                            <span className="bg-gray-200 rounded-xl p-2">title</span>: {props.metadata.title}
                        </p>
                    </div>
                    &#125;	
                </div>
                {props.level === 0 && <span className="light"></span>}
                <img alt="" className="image absolute" width="100%" src={props.metadata.img} />
                <div className="detailsContainer hide">
                    <p className="title truncate">{props.metadata.title}</p>
                    <p className="description" dangerouslySetInnerHTML={{__html: props.metadata.desc}}></p>
                </div>
            </div>
        </div>
    )
}
export default NFTItem