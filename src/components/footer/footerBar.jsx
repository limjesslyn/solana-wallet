const FooterBar = (props) => {
    return (
        <div className="w-6/12 h-20 flex place-content-between mt-20 px-20 z-30">
            {props.children}
        </div>
    )
}

export default FooterBar