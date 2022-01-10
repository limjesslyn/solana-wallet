import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = (props) => {
    const isLogin = useSelector(state => state.auth.isLogin);

    return <>{
        !isLogin ?
            <Navigate to={"/sign-in"} replace={true} /> : props.children}</>
}

export default RequireAuth