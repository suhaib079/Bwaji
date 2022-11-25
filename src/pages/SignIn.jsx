import {auth, signInWithGooglePopup,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'
import { useEffect } from 'react';
import {getRedirectResult} from 'firebase/auth'
// import { async } from '@firebase/util';

import SignUpForm from '../components/SignUpForm';
import Layout from 'layouts/Auth';

const SignIn = () => {
    
    
    const logGoogleUser = async() =>{
        const {user} = await signInWithGooglePopup();
        // console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return ( 
        
        <Layout>


            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>SIGN WITH GOOGLE</button>
            <SignUpForm/>
            
            {/* <button onClick={signInWithGoogleRedirect}>SIGN WITH GOOGLE redirect</button> */}
        </Layout>
     );
}
 
export default SignIn ;