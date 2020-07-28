import React from 'react'
// import {Link} from 'react-router-dom'
import { connect} from  'react-redux'
import {HeaderContainer,LogoContainer,OptionLink,OptionsContainer} from './header.styles.jsx'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import {signOutStart} from '../../redux/user/user.actions'
const Header = ({ currentUser, hidden,signOutStart }) => (

    <HeaderContainer>
   <LogoContainer to='/'>
       <Logo className='logo' />
   </LogoContainer>
        
     
   <OptionsContainer>
   <OptionLink className='option' to='/shop'>SHOP</OptionLink>
         <OptionLink className='option' to='/shop'>CONTACT</OptionLink>
         {
             currentUser?
             (<OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>)
             : 
             (<OptionLink className='option' to='/signin'>SIGN IN</OptionLink>)
         }
        <CartIcon/>

   </OptionsContainer>
        
     
     {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
     
     
   
)

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
currentUser,
hidden

})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)