import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterBar from "../footer/footerBar";
const SigninFoot = (props) => {
    const navigate = useNavigate();

    const eventSubmit = (e) => {
        navigate("/", {
            replace: true
        })
        e.preventDefault();
    }

    const [phrase, setPhrase] = useState("");
    const eventOnChangePhrase = (e) => {
        setPhrase(e.target.value)
    }

    return (
        <form onSubmit={eventSubmit}>
            <input
                id="phrase"
                defaultValue={phrase}
                placeholder="Phrase..."
                onChange={eventOnChangePhrase}
                className="w-4/12 pl-10 leading-3 rounded-xl bg-white h-40 flex h-16 mt-10 mx-auto"
                style={{ boxShadow: 'inset -3px 4px 9px rgb(0 0 0 / 0.15)' }}></input>
        </form>
    )
}
export default SigninFoot