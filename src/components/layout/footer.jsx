import FooterItem from "../footer/footerItem";
import FooterBar from "../footer/footerBar";
import leftIcon from "../../resources/arrow-back.svg"
import rightIcon from "../../resources/arrow-forward.svg"

const Footer = (props) => {
    return (
        <div className="p-10">
            <FooterBar>
                <FooterItem icon={leftIcon}/>
                <FooterItem icon={rightIcon}/>
            </FooterBar>
        </div>
    )
}

export default Footer