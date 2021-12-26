import autoprefixer from "autoprefixer"

const HomeItem = () => {
    return (
        <div id="content" className="flex mt-10 hover:shadow-xl">
            <div className="fixed -mt-24 mx-10 w-52 h-52 bg-gray-300 rounded-full"></div>
            <div className="flex rounded-2xl bg-white shadow-lg items-center" style={{height: "350px", width:"280px"}}>
                <p className="text-center -mt-10 fixed" style={{width:"280px"}}>Coin</p>
                <p className="text-center mt-28 fixed" style={{width:"280px"}}>Balance</p>
            </div>   
        </div>
    )
}
export default HomeItem