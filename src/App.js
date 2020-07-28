import React  from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
 
// import {selectCurrentUser} from './redux/user/user.selector'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in and sign-up'
import CheckoutPage from './pages/checkout/checkout.component'
// import {auth,createUserProfileDocument,addCollectionAndDocuments} from './firebase/firebase.utils'
// import {auth,createUserProfileDocument} from './firebase/firebase.utils'

// import {selectCollectionsForPreview} from './redux/shop/shop.selector'
// import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import {checkUsersSession} from './redux/user/user.actions'





class App extends React.Component { 

unsubscribeFromAuth = null
componentDidMount() {
  

  const {checkUsersSession} = this.props
  checkUsersSession()
//   console.log("MOUNTING")
//  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
//   // console.log(userAuth)
//   if(userAuth) {
//     const userRef = await createUserProfileDocument(userAuth)
    
    
//     userRef.onSnapshot(snapShot => {
//       setCurrentUser({id:snapShot.id, ...snapShot.data()}
//       )
//     } )
    
//   } else {setCurrentUser(userAuth)
//   }
//   // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
//  }, )
}
componentDidUpdate () {
  console.log("component update")
}
componentWillUnmount() {
  this.unsubscribeFromAuth()
}

render() {
  console.log("Rendering")
  return <div>
  <Header />
 <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route  path='/shop' component={ShopPage}/>
     <Route  exact path='/signin' render={()=> this.props.currentUser? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
     <Route  exact path='/checkout' component={CheckoutPage}/>

</Switch>
 

  </div>
}
  
}



const mapStateToProps = state => ({
  currentUser : selectCurrentUser(state),
  // collectionsArray: selectCollectionsForPreview(state)
})
const mapDispatchToProps = dispatch => ({
  checkUsersSession:() => dispatch(checkUsersSession())
})
 

 

export default connect(mapStateToProps,mapDispatchToProps)(App)