const LeftSideNavbar = (props) => {
    return (
        <div className="w-6/12 bg-white shadow-md rounded-3xl h-20 flex justify-evenly">
            {props.children}
        </div>
    )
}

export default LeftSideNavbar