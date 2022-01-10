import { LeftSideNavbar, RightSideNavbar, MenuItem, Profile } from "../navbar";
import coinsIcon from "../../resources/coins.svg"
import nftIcon from "../../resources/nft.svg"
import signOutIcon from "../../resources/sign-out.svg"
import { Secret2Keypair, SecretString2Secret } from "../../utils/wallet";
import { useSelector } from "react-redux";

const Navbar = (props) => {
    const auth = useSelector(state => state.auth);
    const network = useSelector(state => state.cluster.network);

    return (
        <div className="flex p-3">
            <LeftSideNavbar>
                <MenuItem to="/" name="Coins" icon={coinsIcon} />
                <MenuItem to="/nft" name="Collectibles" icon={nftIcon} />
                <MenuItem to="/sign-out" name="Sign Out" icon={signOutIcon} />
            </LeftSideNavbar>
            <RightSideNavbar>
                <Profile image="https://i.pinimg.com/736x/19/3f/88/193f8815fbe4b057783f9fb2b28845c3.jpg" cluster={network} address={Secret2Keypair(SecretString2Secret(auth.secret)).publicKey.toBase58()} />
            </RightSideNavbar>
        </div>
    )
}

export default Navbar