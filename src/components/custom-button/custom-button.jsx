import React from 'react'

import {CustomButtonContainer} from './custom-button.styles.jsx'
const CustomButton = (props) => (

    <CustomButtonContainer {...props}>
     {props.children}
     </CustomButtonContainer>
)

export default CustomButton

// const CustomButton = ({children, isGoogleSignIn,inverted, ...otherProps}) => (

//     <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
//      {children}
// </button>
// )

// export default CustomButton