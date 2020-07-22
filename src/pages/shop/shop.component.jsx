import React from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {connect} from 'react-redux'
import CollectionPage from '../collection/collection.component'
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
// import {updateCollections} from '../../redux/shop/shop.actions'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)







class ShopPage extends React.Component{
  state = {
    loading:true
  }
UnsubscribeFromSnapshot = null

componentDidMount() {
  const {updateCollections} = this.props
  const collectionRef = firestore.collection('collections')

  collectionRef.onSnapshot( async snapShot => {
    
    const collectionMap = convertCollectionsSnapshotToMap(snapShot)
    updateCollections(collectionMap)
    this.setState({loading:false})
  })
  // collectionRef.get().then(snapShot => {
    
  //   const collectionMap = convertCollectionsSnapshotToMap(snapShot)
  //   updateCollections(collectionMap)
  //   this.setState({loading:false})
  // })

  // fetch ('.......')
  // .then(reponse => response.json())
  // .then(collections => console.log(collections))
}
  render() {
    const {match} = this.props
    const {loading} = this.state
    return (
      <div className='shop-page'>
          
          < Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
          < Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
      </div>
    )
  }
} 

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)