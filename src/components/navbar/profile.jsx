import { ShortenAddress } from '../../utils/wallet'

const Profile = ({ image, address }) => {
    return (
        <div className="flex flex-col py-2 justify-center items-end">
            <div className="w-10 h-10 bg-center bg-no-repeat bg-contain rounded-full" style={{ backgroundImage: `url("${image}")`, backgroundSize: "100% auto" }}>
            </div>
            <span className="text-xs mt-1">{ShortenAddress(address)}</span>
        </div>
    )
}
export default Profile