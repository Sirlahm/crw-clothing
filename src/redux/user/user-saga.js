import {takeLatest,put,all,call} from 'redux-saga/effects'

import {UserActionTypes} from './user.types'
import {auth, googleProvider, createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utils'
import {SignInSuccess,SignInFailure,SignOutSuccess,SignOutFailure,signUpSuccess,signUpFailure} from './user.actions'

export function* getSnapshotFromUseAuth(userAuth, additionalData) {
       try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
        const userSnapshot = yield userRef.get()
        yield put(SignInSuccess({id:userSnapshot.id, ...userSnapshot.data()}))
    } catch(error) {
     yield put(SignInFailure(error))
    }
}


export function* signInWithGoogle() {

    try{
        const {user} = yield auth.signInWithPopup(googleProvider)
        // console.log(userRef)
        yield getSnapshotFromUseAuth(user)
    } catch(error) {
     yield put(SignInFailure(error))
    }
}

export function* signInWithEmail({payload : {email,password}}) {
try {
    const {user} = yield auth.signInWithEmailAndPassword(email,password)
    yield getSnapshotFromUseAuth(user)

} catch(error){
yield put(SignInFailure(error))
}
}



export function* isUserAuthenticated() {
try {
    // const user = yield getCurrentUser()
    // if(!user) return;
    // yield getSnapshotFromUseAuth(user)
    const user = yield getCurrentUser()
    if(user) {
        yield getSnapshotFromUseAuth(user)
    } else {  yield put(SignInSuccess(user));}
   

} catch(error) {
    yield put(SignInFailure(error))
}
}

export function* signOut() {
    try{
      yield auth.signOut()
      yield put(SignOutSuccess())
    } catch(error) {
        yield put(SignOutFailure(error))

    }
}


export function* signUp({payload: {email,password,displayName}}) {
try {

    const {user} = yield auth.createUserWithEmailAndPassword(email,password)
    yield put(signUpSuccess({user,additionalData:{displayName}}))
} catch(error) {
   yield put(signUpFailure(error))
}
}

export function* signInAfterSignUp({payload: {user,additionalData}}) {
yield getSnapshotFromUseAuth(user,additionalData)
}


export function* onGoogleSignInStart() {
yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUsersSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}


export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* userSaga() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUsersSession), call(onSignOutStart),call(onSignUpStart),call(onSignUpSuccess)])
}

