import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLogin, setSecret as setAuthSecret } from "../../redux/slice/auth"
import { useDispatch } from "react-redux";
import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39";
import { derivePath } from "ed25519-hd-key";

const SigninFoot = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const eventSubmit = (e) => {
        e.preventDefault();

        // m/44'/501'/0'/0'
        const seed = bip39.mnemonicToSeedSync(mnemonic, "");
        const path = `m/44'/501'/0'/0'`;
        let keypair = Keypair.fromSeed(derivePath(path, seed.toString("hex")).key);

        localStorage.setItem("secret", keypair.secretKey.toString());
        dispatch(setAuthSecret(keypair.secretKey.toString()))
        dispatch(setLogin(true))
        navigate("/", {
            replace: true
        })
    }

    const [mnemonic, setMnemonic] = useState("");
    const eventOnChangeMnemonic = (e) => {
        setMnemonic(e.target.value)
    }

    return (
        <form onSubmit={eventSubmit}>
            <textarea
                id="mnemonic"
                defaultValue={mnemonic}
                placeholder="Mnemonic phrase..."
                rows={6}
                onChange={eventOnChangeMnemonic}
                className="p-5 w-4/12 text-gray-500 resize-none outline-none rounded-xl bg-white flex mt-10 mx-auto"
                style={{ boxShadow: 'inset -3px 4px 9px rgb(0 0 0 / 0.15)' }}></textarea>
            <button t y pe="submit" className="btn flex mx-auto normal-case bt
n-secondary" >Connect</button>
        </form>
    )
}
export default SigninFoot