const FloatingItemButton = ({icon, onClick}) => {
    return (
        <div className="w-3/12 h-20 justify-center items-center flex">
            <img className="bg-white shadow-lg rounded-full p-5 hover:shadow-2xl" src={icon} onClick={onClick}/>
        </div>
    )
}
export default FloatingItemButton