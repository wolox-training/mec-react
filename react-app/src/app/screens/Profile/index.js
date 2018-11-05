import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

function Profile({ user }) {
  console.log(user);
  return !user ? (
    <Redirect to="/" />
  ) : (
    <div className="flex-profile">
      <h2>
        {user.name} {user.surname}
      </h2>
      <p className="mail">{user.mail}</p>
      <p className="description">{user.description}</p>
    </div>
  );
}
const mapStateToProps = state => ({
  user: state.login.user
});

Profile.propTypes = {
  user: PropTypes.obj
};

export default connect(
  mapStateToProps,
  null
)(Profile);
