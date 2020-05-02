import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getEmotionsThunk} from '../store/emotionData'
import {getImpressionsThunk} from '../store/impressions'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  componentDidMount() {
    this.props.getAllEmotions()
    this.props.getAllImpressions()
  }

  render() {
    console.log(
      this.props,
      'this.props in the react component - should have the emotions there '
    )
    return <h1>Test</h1>
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

const mapDispatch = dispatch => {
  return {
    getAllEmotions: () => dispatch(getEmotionsThunk()),
    getAllImpressions: () => dispatch(getImpressionsThunk())
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
