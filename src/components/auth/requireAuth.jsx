import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequireAuth = (props) => {
    const navigate = useNavigate();
    const isLogin = useSelector(state => state.auth.isLogin);
    useEffect(() => {
        if (!isLogin) {
            navigate("/sign-in", {
                replace: true
            })
        }
    }, [isLogin]);

    return <>{props.children}</>
}

export default RequireAuth