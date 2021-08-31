import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB0YNvBdesKVW4zqGRpSdKS-rrLPOuqqQo",
    authDomain: "crown-db00.firebaseapp.com",
    projectId: "crown-db00",
    storageBucket: "crown-db00.appspot.com",
    messagingSenderId: "663520012318",
    appId: "1:663520012318:web:507c49c13216eeb7f4660f",
    measurementId: "G-14PL4PFJEB"
}

export const createUserprofileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    console.log(userRef);
    console.log(snapshot);

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        }).then(()=>{
            console.log('Created new user');
        }).catch(err=>{
            console.log('Error creating new user', err.message);
        })
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;