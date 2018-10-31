import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

function Profile({ email, logged }) {
  return !logged ? (
    <Redirect to="/" />
  ) : (
    <div className="flex-container">
      <h1>{email}</h1>
    </div>
  );
}
const mapStateToProps = state => ({
  email: state.login.email,
  logged: state.login.logged
});

Profile.propTypes = {
  email: PropTypes.string,
  logged: PropTypes.bool
};

export default connect(
  mapStateToProps,
  null
)(Profile);
