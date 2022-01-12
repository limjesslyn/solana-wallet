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
                {props.level === 0 && <span className="light"></span>}
                <img alt="" className="image" width="100%" src={props.metadata.img} />
                <div className="detailsContainer hide">
                    <p className="title truncate">{props.metadata.title}</p>
                    <p className="description truncate" dangerouslySetInnerHTML={{__html: props.metadata.desc}}></p>
                </div>
            </div>
        </div>
    )
}
export default NFTItem