const Content = (props) => {
    return (
        <div className="w-7/12 p-10 bg-white shadow-2xl rounded-l-3xl h-80 flex ml-auto ">
            {props.children}
        </div>
    )
}
export default Content