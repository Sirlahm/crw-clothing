import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCxTG1Z0aHAN3EDVW8-Ls7CrpeUZ3RRZ9A",
    authDomain: "e-commerce-project-2a133.firebaseapp.com",
    databaseURL: "https://e-commerce-project-2a133.firebaseio.com",
    projectId: "e-commerce-project-2a133",
    storageBucket: "e-commerce-project-2a133.appspot.com",
    messagingSenderId: "215593395818",
    appId: "1:215593395818:web:3f33a99f83e08be0b88c13",
    measurementId: "G-2RS5C2FXGE"
  }
export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email} = userAuth
        const createDate = new Date()
        try {
             await userRef.set({
                 displayName,
                 email,
                 createDate,
                 ...additionalData
             })
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef
    // console.log(userRef)
}
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const  firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  export default firebase