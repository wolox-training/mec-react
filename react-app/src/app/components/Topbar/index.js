import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionCreator from '../../../redux/loginReducer/actions';

const Topbar = ({ logOut }) => (
  <nav className="navbar">
    <NavLink activeClassName="active" to="/profile">
      User Profile
    </NavLink>
    <NavLink activeClassName="active" to="/game">
      Game
    </NavLink>
    <button className="navbutton" onClick={logOut}>
      LogOut
    </button>
  </nav>
);

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actionCreator.logOut())
});

Topbar.propTypes = {
  logOut: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(Topbar);
