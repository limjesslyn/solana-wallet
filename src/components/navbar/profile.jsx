import { DropdownCluster } from '.'
import { ShortenAddress } from '../../utils/wallet'
import dropdownIcon from "../../resources/dropdown.svg"

const Profile = ({ image, address, cluster }) => {
    return (
        <div className="flex px-2 w-full justify-around items-center">
            <DropdownCluster>
                <span tabIndex="0" className="border-none hover:cursor-pointer flex">
                    <div className='flex flex-col mr-2'>
                    {ShortenAddress(address)}<small>{cluster}</small>
                    </div>
                    <img src={dropdownIcon} />
                </span>
            </DropdownCluster>
            <div className="w-12 h-12 bg-center justify bg-no-repeat bg-contain rounded-full" style={{ backgroundImage: `url("${image}")`, backgroundSize: "100% auto" }}>
            </div>
        </div>
    )
}
export default Profile