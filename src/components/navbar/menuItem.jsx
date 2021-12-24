import { Link } from "react-router-dom"

const MenuItem = ({icon, name, to, onClick}) => {
    return (
        <Link to={to} className="h-100 justify-center items-center flex flex-col py-2" onClick={onClick}>
            <img src={icon} alt={name} className="w-2/12 grayscale hover:grayscale-0"/>
            <span className="text-xs mt-1">{name}</span>
        </Link>
    )
}
export default MenuItem