import React from 'react'

import './sign-in.style.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button'
// import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js'
// import 
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'
class SignIn extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:''
        }

       
    }
    handleSubmit = async event => {
        event.preventDefault()
        const {emailSignInStart} = this.props
        const {email, password} = this.state
        emailSignInStart(email,password)


        //  try {
        //      await auth.signInWithEmailAndPassword(email,password)
        //      this.setState({email:'', password:''})
        //  } catch (error) {
        //      alert('Email and Password not Match! .. Try Again')
        //      console.log(error)
        //  }
        // this.setState({email: '',password:''})  //check
    }

    handleChange = event => {
        console.log(event.target)
        const{value, name} = event.target;
        
        this.setState({[name] : value})
        console.log(this.state)
    }

    render()  {

        const {googleSignInStart} = this.props 
        return (

            <div className='sign-in'>

                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit= {this.handleSubmit} >
                    <FormInput name='email' type='email' value={this.state.email} label='email' required handleChange= {this.handleChange}/>
                   
                    <FormInput name='password'
                    label='password'
                     type='password' 
                     value={this.state.password} 
                     handleChange= {this.handleChange}
                     required/>
                        <div className='buttons'>
                        <CustomButton type='submit' onSubmit= {this.handleSubmit}> Sign in </CustomButton>
                    <CustomButton type='button 'onClick = {googleSignInStart} isGoogleSignIn> Sign with Google </CustomButton>
                        </div>
 

                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart:() => dispatch(googleSignInStart()),
    emailSignInStart:(email,password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(SignIn)  