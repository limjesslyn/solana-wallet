import { LeftSideNavbar, MenuItem } from "../navbar";
import coinsIcon from "../../resources/coins.svg"
import nftIcon from "../../resources/nft.svg"
import signOutIcon from "../../resources/sign-out.svg"

const Navbar = (props) => {
    return (
        <div className="p-3">
            <LeftSideNavbar>
                <MenuItem to="/" name="Coins" icon={coinsIcon}/>
                <MenuItem to="/nft" name="Collectibles" icon={nftIcon}/>
                <MenuItem to="/sign-out" name="Sign Out" icon={signOutIcon}/>
            </LeftSideNavbar>
        </div>
    )
}

export default Navbar