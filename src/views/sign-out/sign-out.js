import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin, setPhrase } from "../../redux/slice/auth";

const SignOut = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.removeItem("phrase");
        setTimeout(() => {
            dispatch(setPhrase(""));
            dispatch(setLogin(false));
            navigate("/sign-in", {
                replace: true
            })
        }, 1000);
    }, []);

    return (
        <div>
            Logging out..
        </div>
    )
}

export default SignOut;