import { NavKiri, NavKanan } from "../navbar";
import dropdown from "../../resources/dropdown.svg"
const Sign = (props) => {
    return (
        <div className="flex p-3">
            <NavKiri>
                <span className="flex item-start py-4 font-bold text-2xl ml-10 justify-center align-middle">Solxy</span>
            </NavKiri>
            <NavKanan>
                <span className="flex item-start py-4 font-bold text-md pl-4 justify-center align-middle">Mainnet</span>
                <img src={dropdown}/>
            </NavKanan>
        </div>
    )
}
export default Sign