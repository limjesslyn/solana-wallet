const Content = (props) => {
    return (
        <div className="w-7/12 bg-white shadow-2xl rounded-3xl h-90 flex ml-auto ">
            {props.children}
        </div>
    )
}
export default Content