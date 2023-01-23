// import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUSer =  async () => {
        // const response = await signInWithGooglePopup();
        // console.log('response', response); 
    };

    return (
        <div>
            <h1>Sign In Page......</h1>
            <button onClick={logGoogleUSer}>Sign in with Google</button>
        </div>
    );
};

export default SignIn;
