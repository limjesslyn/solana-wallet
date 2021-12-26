import HomeItem from "../home-item/homeItem";
const Item = (props) =>{
    return(
        <div className="w-full absolute">
            <div className="flex flex-row justify-evenly">
                <span className="ml-auto"><HomeItem/></span>
                <span className="mt-10"><HomeItem/></span>
                <span className="mt-20"><HomeItem/></span>
                <span className="mt-10"><HomeItem/></span>
                <span className="mr-auto"><HomeItem/></span>
            </div>
        </div>
        
    )
}
export default Item