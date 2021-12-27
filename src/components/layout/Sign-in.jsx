import { NavKiri, NavKanan, DropdownCluster } from "../navbar";
import dropdown from "../../resources/dropdown.svg"
import { useSelector } from "react-redux";

const Sign = (props) => {
    const clusterNetwork = useSelector(state => state.cluster.network)

    return (
        <div className="flex p-3">
            <NavKiri>
                <span className="flex item-start py-4 font-bold text-2xl ml-10 justify-center align-middle">Solxy</span>
            </NavKiri>
            <NavKanan>
                <span className="flex item-start py-4 font-bold text-md pl-4 justify-center align-middle">{clusterNetwork}</span>
                <DropdownCluster>
                    <img tabIndex="0" className="btn bg-base-100 border-none hover:bg-base-100" src={dropdown} />
                </DropdownCluster>
            </NavKanan>
        </div>
    )
}
export default Sign