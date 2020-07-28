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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

   const collectionRef = firestore.collection(collectionKey) 
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })
    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    console.log(collections)
    const transformedCollection = collections.docs.map(doc => {
        console.log(doc.data())
        const {title, items} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
   return transformedCollection.reduce((acc,collection) => {
       acc[collection.title.toLowerCase()] = collection;
       return acc
   }, {})
}


export const getCurrentUser = () => {
    return new Promise((resolve,reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    }) 
}




  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const  firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  googleProvider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
  export default firebase