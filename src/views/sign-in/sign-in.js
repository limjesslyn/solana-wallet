import Sign from '../../components/layout/Sign-in';
import SignFoot from '../../components/layout/Sign-inFoot';
import SignContent from '../../components/layout/Sign-inContent';
import './sign-in.css';

const SignIn = () => {
    return (
        <div>
            <Sign/>
            <SignContent/>
            <SignFoot/>
        </div>
    )
}

export default SignIn;