const HomeItem = (props) => {
    return (
        <div className={'item level' + props.level}>
            <div className="imageContainer">
                <img className="image" />
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