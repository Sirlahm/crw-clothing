// import { UserActionTypes} from './user.types'

 
//  export const setCurrentUser = user => ({
//      type: UserActionTypes.SET_CURRENT_USER,
//      payload: user
//  })

//  export const googleSignInStart = () => ({
//      type: UserActionTypes.GOOGLE_SIGN_IN_START
//  })
//  export const googleSignInSuccess = (user) => ({
//      type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
//      payload: user
//  })

//  export const googleSignInFailure = (error) => ({
//     type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
//     payload: error
// })

// export const emailSignInStart = emailAndPassword => ({
//     type: UserActionTypes.EMAIL_SIGN_IN_START,
//     payload: emailAndPassword
// })
// export const emailSignInSuccess = (user) => ({
//     type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
//     payload: user
// })

// export const emailSignInFailure = (error) => ({
//    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
//    payload: error
// })

import { UserActionTypes} from './user.types'

 


 export const googleSignInStart = () => ({
     type: UserActionTypes.GOOGLE_SIGN_IN_START
 })
 export const SignInSuccess = (user) => ({
     type: UserActionTypes.SIGN_IN_SUCCESS,
     payload: user
 })

 export const SignInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const checkUsersSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})
export const SignOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
    
})

export const SignOutFailure = (error) => ({
   type: UserActionTypes.SIGN_OUT_FAILURE,
   payload:error
})
export const signUpStart = userCredentials => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
})

export const signUpSuccess = ({user,additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user,additionalData}
})

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload:error
 })