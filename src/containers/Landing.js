import React from "react";
//redux connect para conectar este componente con el almacenamiento global
import { connect, useSelector } from "react-redux";
const Landing = () => {
  //creamos la const de y le asignamos los datos de la app
  const usuarios = useSelector((state) => state);
  //imprimimos en pantalla
  console.log("los datos son ", usuarios);
  return <div>este es el landing </div>;
};
//colocamos el conect y definimos las constantes
//como parametro le damos todos los reducers
// pero como queremos solo el de los usuarios
//y como solo queremos el reducer de usuarios eso retornamos
const mapStateToProps = (reducers) => {
  return reducers.usuariosReducers;
};

//pasamos ese const a connect
export default connect(mapStateToProps, {
  /* actions */
})(Landing);
