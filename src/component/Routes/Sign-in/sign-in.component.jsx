import React from 'react';
// import { useEffect } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, /*signInWithGoogleRedirect, auth*/ } from '../../../Utils/firebase/Firebase.utils'
import SignUpForm from '../../Sign-UP-Form/Sign-up-form.components';
// import { getRedirectResult } from 'firebase/auth'

export default function SignIn() {

    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if (response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)

    }
    // const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user)

    // }



    return (
        <div>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With GoogleRedirect</button> */}
            {/* <h1>Sign In page</h1> */}
        </div>
    )
}
