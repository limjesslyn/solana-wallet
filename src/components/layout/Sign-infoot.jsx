import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLogin, setPhrase as setAuthPhrase } from "../../redux/slice/auth"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SigninFoot = (props) => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const eventSubmit = async (e) => {
        localStorage.setItem("phrase", phrase);
        dispatch(setAuthPhrase(phrase))
        dispatch(setLogin(true))
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
            <textarea
                id="phrase"
                defaultValue={phrase}
                placeholder="Phrase..."
                rows={6}
                onChange={eventOnChangePhrase}
                className="p-5 w-4/12 text-gray-500 resize-none outline-0 rounded-xl bg-white flex mt-10 mx-auto"
                style={{ boxShadow: 'inset -3px 4px 9px rgb(0 0 0 / 0.15)' }}></textarea>
            <button type="submit" className="btn flex mx-auto normal-case btn-secondary">Connect</button>
        </form>
    )
}
export default SigninFoot