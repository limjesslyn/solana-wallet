const FooterItem = ({icon, onClick}) => {
    return (
        <div className="h-100 items-center flex py-2">
            <img alt="" src={icon} onClick={onClick}/>
        </div>
    )
}
export default FooterItem