const HomeItem = (props) => {
    return (
        <div className={'item level' + props.level}>
            <div className="imageContainer">
                <img className="image" src={props.metadata.img}/>
            </div>
            <div className="textContainer text-center">
                <p className="currency">{props.metadata.symbol}</p>
                <p className="coinName">{props.metadata.title}</p>
                <p className="balance">Balance</p>
                <p className="balanceValue">{props.metadata.balance}</p>
            </div>
        </div>
    )
}
export default HomeItem