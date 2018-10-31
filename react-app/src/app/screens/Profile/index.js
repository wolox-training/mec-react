import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

function Profile({ email, logged, name, surname, description }) {
  return !logged ? (
    <Redirect to="/" />
  ) : (
    <div className="flex-profile">
      <h2>
        {name} {surname}
      </h2>
      <p className="mail">{email}</p>
      <p className="description">{description}</p>
    </div>
  );
}
const mapStateToProps = state => ({
  email: state.login.email,
  logged: state.login.logged,
  name: state.login.name,
  surname: state.login.surname,
  description: state.login.description
});

Profile.propTypes = {
  email: PropTypes.string,
  logged: PropTypes.bool,
  name: PropTypes.string,
  surname: PropTypes.string,
  description: PropTypes.string
};

export default connect(
  mapStateToProps,
  null
)(Profile);
