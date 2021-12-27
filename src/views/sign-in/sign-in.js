import Sign from '../../components/layout/Sign-in';
import Signinfoot from '../../components/layout/Sign-infoot';
import Signcontent from '../../components/layout/Sign-inContent';
import './sign-in.css';

const SignIn = () => {
    return (
        <div>
            <Sign/>
            This is Sign In
            <Signcontent/>
            <Signinfoot/>
        </div>
    )
}

export default SignIn;