import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const Profile = ({ email, logged }) =>
  !logged ? (
    <Redirect to="/" />
  ) : (
    <div className="flex-container">
      <h1>{email}</h1>
    </div>
  );

const mapStateToProps = state => ({
  email: state.login.email,
  logged: state.login.logged
});

export default connect(
  mapStateToProps,
  null
)(Profile);
