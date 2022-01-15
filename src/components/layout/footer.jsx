import FooterItem from "../footer/footerItem";
import FooterBar from "../footer/footerBar";
import FloatingItemButton from "../footer/floatingItemButton";
import leftIcon from "../../resources/arrow-back.svg"
import rightIcon from "../../resources/arrow-forward.svg"
import sendIcon from "../../resources/send.svg";
import saveIcon from "../../resources/save.svg";
import SendModal from "./sendModal";
import Snackbar from "../snackbar/snackbar"
import { Secret2Keypair, SecretString2Secret } from "../../utils/wallet";
import { useSelector } from "react-redux";

const Footer = (props) => {
    const auth = useSelector(state => state.auth);
    const token = useSelector(state => state.token)

    return (
        <div className="p-10 flex w-full absolute bottom-0">
            <FloatingItemButton onClick={() => {
                if(token.currentToken !== null) {
                    let modal = document.getElementById("modal");
                    if (!modal.classList.contains("modal-open")) {
                        modal.classList.add("modal-open");
                    }
                }
            }} icon={sendIcon} />
            <FooterBar>
                <FooterItem onClick={props.onClickPrevious} icon={leftIcon} />
                <FooterItem onClick={props.onClickNext} icon={rightIcon} />
            </FooterBar>
            <FloatingItemButton icon={saveIcon} onClick={() => {
                navigator.clipboard.writeText(Secret2Keypair(SecretString2Secret(auth.secret)).publicKey.toBase58());
                let snackbar = document.getElementById("snackbar");
                snackbar.className = "show"
                setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 2750)
            }}/>
            <SendModal refreshItem={props.refreshItem} />
            <Snackbar address={Secret2Keypair(SecretString2Secret(auth.secret)).publicKey.toBase58()}/>
        </div>
    )
}

export default Footer