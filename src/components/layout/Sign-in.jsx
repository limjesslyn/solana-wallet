import { Navkiri, Navkanan } from "../navbar";
const Sign = (props) => {
    return (
        <div className="flex p-3">
            <Navkiri>
                <span className="flex item-start py-4 font-bold text-2xl pl-4 justify-center align-middle">Solxy</span>
            </Navkiri>
            <Navkanan>
                <span className="flex item-start py-4 font-bold text-2xl pl-4 justify-center align-middle">Mainnet</span>
            </Navkanan>
        </div>
    )
}
export default Sign