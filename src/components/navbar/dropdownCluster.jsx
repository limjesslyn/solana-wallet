import { useDispatch, useSelector } from "react-redux"
import { ClustersNetwork } from "../../const"
import { setCluster } from "../../redux/slice/cluster"

const DropdownCluster = (props) => {
    const clusterNetwork = useSelector(state => state.cluster.network)
    const dispatch = useDispatch()

    return (
        <div className="dropdown dropdown-end">
            {props.children}
            <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                {
                    ClustersNetwork.map(el => {
                        return (
                            <li key={el}>
                                <a className={clusterNetwork === el ? "active" : ""} onClick={() => {
                                    dispatch(setCluster(el))
                                    localStorage.setItem("cluster", el)
                                }}>{el}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default DropdownCluster