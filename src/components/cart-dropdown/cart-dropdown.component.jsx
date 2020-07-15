import React from 'react'
import {withRouter} from 'react-router-dom'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import './cart-dropdown.style.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems, history, dispatch}) => (

    <div className='cart-dropdown'>
        <div className='cart-items'> 
        { cartItems.length ?
        (cartItems.map(cartItem =>  (
        <CartItem key={cartItem.id} item={cartItem}/>)
        )) : (<span className='empty-message'>YOUR CART IS EMPTY</span>)}
        </div>
       <CustomButton onClick = {()=> {history.push('/checkout');
    dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
        
     </div>
)



const mapStateToProps = state => {
    
    
    console.log ('dropdown')
    return {
    cartItems : selectCartItems(state)
}}
export default withRouter(connect(mapStateToProps)(CartDropdown))