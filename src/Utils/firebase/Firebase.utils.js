
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    // signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFOkwciM_C5agqKOfp0yR_jJY2fSB22ls",
    authDomain: "crwn-clothing-db-d2c82.firebaseapp.com",
    projectId: "crwn-clothing-db-d2c82",
    storageBucket: "crwn-clothing-db-d2c82.appspot.com",
    messagingSenderId: "747353911988",
    appId: "1:747353911988:web:4a78dc4eb2a44caa0a9de1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createDate = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createDate,
                ...additionalInformation,
            });

        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password);
}