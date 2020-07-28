import React from 'react'
import {Route} from 'react-router-dom'
import {CollectionsOverviewContainer, CollectionsPageContainer} from '../../components/collections-overview/collections-overview.container'
import {connect} from 'react-redux'
import CollectionPage from '../collection/collection.component'
// import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
// import {selectIsCollectionFetching,selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'

// import {updateCollections} from '../../redux/shop/shop.actions'
import {createStructuredSelector} from 'reselect'
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)







class ShopPage extends React.Component{
//   state = {
//     loading:true
//   }
// UnsubscribeFromSnapshot = null

// componentDidMount() {
//   const {updateCollections} = this.props
//   const collectionRef = firestore.collection('collections')

//   collectionRef.onSnapshot( async snapShot => {
    
//     const collectionMap = convertCollectionsSnapshotToMap(snapShot)
//     updateCollections(collectionMap)
//     this.setState({loading:false})
//   })
  // collectionRef.get().then(snapShot => {
    
  //   const collectionMap = convertCollectionsSnapshotToMap(snapShot)
  //   updateCollections(collectionMap)
  //   this.setState({loading:false})
  // })

  // fetch ('.......')
  // .then(reponse => response.json())
  // .then(collections => console.log(collections))
// }
componentDidMount() {
  const {fetchCollectionsStart} = this.props
  fetchCollectionsStart()
}
  render() {
    const {match,isCollectionsLoaded} = this.props
    // console.log(isFetching)
    return (
     
      <div className='shop-page'>
                    < Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                    < Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer}  />

          {/* < Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isFetching} {...props}/>}/> */}
          {/* < Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>} /> */}
      </div>
    )
  }
} 
// const mapStateToProps = createStructuredSelector({
//   // isFetching: selectIsCollectionFetching ,
//   isCollectionsLoaded : selectIsCollectionsLoaded
// })
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)