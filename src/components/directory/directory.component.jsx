import React from 'react'
import {connect} from 'react-redux'
import MenuItem from '../menu-file/menu-item.component'
import './directory.styles.scss'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'



    
const Directory = ({sections}) => {
   
    return <div className='directory-menu'>
        {
            sections.map(({ id, ...otherSpreadProps }) => (
              <MenuItem key={id} {...otherSpreadProps}/>
            ))
        }
    </div>
}

const mapStateToProps = state => ({
  sections : selectDirectorySections(state)
})



export default connect(mapStateToProps)(Directory)