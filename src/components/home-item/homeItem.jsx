import styling from "../../views/home/home.css"
const HomeItem = ({styling}) => {
    return (
        <div className={styling}>
            <div className="imageContainer">
                <img className="image"/>
            </div>
            <div className="textContainer text-center">
                <p className="currency">SAMO</p>
                <p className="coinName">SamoyedCoin</p>
                <p className="balance">Balance</p>
                <p className="balanceValue">100,000,000</p>
            </div>
        </div>
    )
}
export default HomeItem