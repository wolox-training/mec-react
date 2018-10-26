import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

const Profile = ({ email, name, surname, description, logged }) =>
  !logged ? (
    <Redirect to="/" />
  ) : (
    <div className="card">
      <h2 className="names">
        {name} {surname}
      </h2>
      <p>{email}</p>
      <p className="description">{description}</p>
    </div>
  );

const mapStateToProps = state => ({
  email: state.login.email,
  name: state.login.name,
  surname: state.login.surname,
  description: state.login.description,
  logged: state.login.logged
});

Profile.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  description: PropTypes.string,
  logged: PropTypes.bool
};

export default connect(
  mapStateToProps,
  null
)(Profile);
