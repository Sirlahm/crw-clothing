import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../assets/bag.svg'
import './cart-icon.style.scss'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
const CartIcon = ({toggleCartHidden, itemCount}) => (

      
    <div className='cart-icon' onClick={toggleCartHidden}>
        {console.log('render')}
        <ShoppingIcon className='shopping-icon'/>
        <span className = 'item-count'> {itemCount} </span>
    </div>
)
const mapStateToProps = state => {
    console.log('called')
     return {
    
    itemCount : selectCartItemsCount(state)
}}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect (mapStateToProps, mapDispatchToProps)(CartIcon)