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
                <div className="dropdown dropdown-end">
                    <img tabIndex="0" className="btn bg-base-100 border-none hover:bg-base-100" src={dropdown} />
                    <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a>Mainnet</a>
                        </li>
                        <li>
                            <a>Devnet</a>
                        </li>
                        <li>
                            <a>Testnet</a>
                        </li>
                    </ul>
                </div>
            </NavKanan>
        </div>
    )
}
export default Sign