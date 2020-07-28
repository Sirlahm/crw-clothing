import React from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
// import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.scss'
 import {signUpStart, signOutStart} from '../../redux/user/user.actions'

class SignUp extends React.Component {

    constructor() {
        super()

        this.state = {
            displayName : '',
            email : '',
            password : '',
            ConfirmPassword : ''
        }
    }
    handleSubmit =  event => {
        event.preventDefault()
        const {signUpStart} = this.props
        const {displayName,email,password,ConfirmPassword} = this.state
       if(password !== ConfirmPassword ) {
           alert ("Passwords don't match")
           return
       }
       signUpStart({displayName,email,password})

    //    try {
    // //    const { user } = 
    //    const wait = await auth.createUserWithEmailAndPassword(email,password)
       
    //    const { user } = wait
    //    console.log(user)
    //    await createUserProfileDocument(user, {displayName})
    //    this.setState({
    //     displayName : '',
    //     email : '',
    //     password : '',
    //     ConfirmPassword : ''
    // })
    //    } catch(error) {
    // console.error(error)
    //    }
    }
    handleChange = event => {
        const { name, value} = event.target
         this.setState({[name] : value})
    }
    render() {
        const {displayName,email,password,ConfirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                     <FormInput
                     type = 'text'
                     name='displayName'
                     value ={displayName}
                     handleChange={this.handleChange} 
                     label='Display Name'
                     required
                     />
                     <FormInput
                     type = 'email'
                     name='email'
                     value ={email}
                     handleChange={this.handleChange} 
                     label='Email'
                     required
                     />
                     <FormInput
                     type = 'password'
                     name='password'
                     value ={password}
                     handleChange={this.handleChange} 
                     label='Password'
                     required
                     />
                     <FormInput
                     type = 'password'
                     name='ConfirmPassword'
                     value ={ConfirmPassword}
                     handleChange={this.handleChange} 
                     label='Confirm Password'
                     required
                     />
                     <CustomButton type='submit' > SIGN UP </CustomButton>

                 </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp)