import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51H6Df8BC5VsNnpYPGCEZsYs0ZHfdlbhGOkiydxtE9Ov2gKYxYLlmPVimTmrzdnqQHLJQKxVgMxDNoFT9re8uBQle00u2zhHZiA'
const onToken = token => {
    console.log(token)
    alert('Payment Sucessful')
}

    return (

    <StripeCheckout 
    label='PAY NOW'
    name='SIRLAHM CLOTHING LTD.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`YOUR TOTAL IS ${price}`}
    amount={priceForStripe}
    panelLabel='PAY NOW'
    token ={onToken}
    stripeKey={publishableKey}

    />
)


}

export default StripeCheckoutButton