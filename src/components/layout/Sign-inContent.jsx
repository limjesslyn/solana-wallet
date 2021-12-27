import { Content, ContentText } from "../navbar";
import Eth from "../../resources/eth.png";
const Signcontent = (props) => {
    return (
        <div className="flex">
            <ContentText>
                <p className="text-xl"><b>Blockchain</b> is the</p>
                <p className="text-xl"><b>internet</b> of assets</p>
                <p>With the help of blockchain you can store your assets without telling your personal data. All you need is just set up your wallet</p>
            </ContentText>
            <Content>
                <img className="max-w-md" src={Eth} />
            </Content>
        </div>

    )
}
export default Signcontent