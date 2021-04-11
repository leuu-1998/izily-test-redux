import React from "react";
import { connect } from "react-redux";
import { lectureUser } from "../reducers/usuariosReducers";
const Login = ({ user }) => <div>este es el login y el usuario es: {user}</div>;

//funcion para acceder a lo que tengo en la store
const mapStateToProps = (state) => {
  return {
    user: lectureUser(state),
  };
};

export default connect(mapStateToProps)(Login);
