import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const Profile = ({ email, name, surname, description, logged }) =>
  !logged ? (
    <Redirect to="/" />
  ) : (
    <div className="flex-container">
      <h2 className="names">{name} {surname}</h2>
      <h2 className="names">{surname}</h2>
      <p className="release">{email}</p>
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

export default connect(
  mapStateToProps,
  null
)(Profile);
