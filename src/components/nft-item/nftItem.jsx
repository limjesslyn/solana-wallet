import dummyWallpaper from "../../resources/dummyWallpaper.png"

const NFTItem = (props) => {
    return (
        <div className={'item nftLevel' + props.level}>
            <div className="nftContainer">
                <img className="image" src={dummyWallpaper} />
                <div className="detailsContainer hide">
                    <p className="title ">{props.id}</p>
                    <p className="description">Lee Ji-eun (Korean: 이지은 ; born May 16, 1993), known professionally as IU (Korean: 아이유 ), is a South Korean singer-songwriter and actress.</p>
                </div>
            </div>
        </div>
    )
}
export default NFTItem