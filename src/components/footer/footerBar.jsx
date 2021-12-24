const FooterBar = (props) => {
    return (
        <div className="w-full flex justify-evenly">
            {props.children}
        </div>
    )
}

export default FooterBar