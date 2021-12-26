const RightSideNavbar = (props) => {
    return (
        <div className="w-2/12 bg-white shadow-md rounded-3xl h-20 flex justify-end pr-4 ml-auto">
            {props.children}
        </div>
    )
}

export default RightSideNavbar