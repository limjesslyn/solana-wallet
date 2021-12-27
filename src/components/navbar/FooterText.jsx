const Footertext = (props) => {
    return (
        <div className="w-3/12 bg-white shadow-md rounded-4xl h-20 flex absolute inset-x-0 bottom-0 h-16 ">
            {props.children}
        </div>
    )
}
export default Footertext