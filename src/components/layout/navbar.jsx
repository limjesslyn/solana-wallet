import { LeftSideNavbar, RightSideNavbar, MenuItem, Profile } from "../navbar";
import coinsIcon from "../../resources/coins.svg"
import nftIcon from "../../resources/nft.svg"
import signOutIcon from "../../resources/sign-out.svg"
import { useDispatch } from "react-redux";
import { setPhrase } from "../../redux/slice/auth";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="flex p-3">
            <LeftSideNavbar>
                <MenuItem to="/" name="Coins" icon={coinsIcon}/>
                <MenuItem to="/nft" name="Collectibles" icon={nftIcon}/>
                <MenuItem to="/sign-out" name="Sign Out" icon={signOutIcon}/>
            </LeftSideNavbar>
            <RightSideNavbar>
                <Profile image="https://i.pinimg.com/736x/19/3f/88/193f8815fbe4b057783f9fb2b28845c3.jpg" address="DummyAddress"/>
            </RightSideNavbar>
        </div>
    )
}

export default Navbar