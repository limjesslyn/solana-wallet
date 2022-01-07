import FooterItem from "../footer/footerItem";
import FooterBar from "../footer/footerBar";
import FloatingItemButton from "../footer/floatingItemButton";
import leftIcon from "../../resources/arrow-back.svg"
import rightIcon from "../../resources/arrow-forward.svg"
import sendIcon from "../../resources/send.svg";
import saveIcon from "../../resources/save.svg";
import SendModal from "./sendModal";

const Footer = (props) => {

    return (
        <div className="p-10 flex w-full absolute bottom-0">
            <FloatingItemButton onClick={() => {
                let modal = document.getElementById("modal");
                if (!modal.classList.contains("modal-open")) {
                    modal.classList.add("modal-open");
                }
            }} icon={sendIcon} />
            <FooterBar>
                <FooterItem onClick={props.onClickPrevious} icon={leftIcon} />
                <FooterItem onClick={props.onClickNext} icon={rightIcon} />
            </FooterBar>
            <FloatingItemButton icon={saveIcon} />
            <SendModal />
        </div>
    )
}

export default Footer