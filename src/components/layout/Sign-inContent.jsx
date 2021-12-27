import { Content, Contenttext } from "../navbar";
import Eth from "../../resources/eth.png";
const Signcontent = (props) => {
    return (
        <div ClassName="flex">
            <Contenttext>
                <p><b>Blockchain</b> is the<b> internet </b>
                    of assets with the help of blockchain you can store your assets without telling your personal data.All you need is just set up your wallet</p>
            </Contenttext>
            <Content>
                <img ClassName="max-w-md" src={Eth} />
            </Content>
        </div>

    )
}
export default Signcontent