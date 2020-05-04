import React from 'react'
// import {Fab} from '@material-ui/core'
import {connect} from 'react-redux'
import ImageUploadForm from './imageForm'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  render() {
    console.log(
      this.props,
      'this.props in the react component - should have the emotions there '
    )
    return (
      <div id="home">
        <h1 id="titleFlex">Enter URL</h1>
        <ImageUploadForm id="uploadFlex" />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState, null)(UserHome)

/**
 * PROP TYPES
 */
