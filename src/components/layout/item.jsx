import HomeItem from "../home-item/homeItem";
const Item = (props) =>{
    return(
        <div className="w-full absolute">
            <div className="flex flex-row justify-evenly">
                <HomeItem styling={"itemLevel0"}/>
            </div>
        </div>
    )
}
export default Item