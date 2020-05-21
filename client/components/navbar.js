import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import {Link} from 'react-router-dom'

const Navbar = ({handleClick, isLoggedIn}) => (
  <>
    <div className="navvy">
      <h1 id="navBar">Nuance</h1>
      <Link to="/home">Home</Link>
      <Link to="/kairos">Statistics</Link>
    </div>
    <hr />
  </>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
