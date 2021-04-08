import { combineReducers } from "redux";
import usuariosReducers from "./usuariosReducers";

//aqui combinamos todos los reducers para que se puedan
//ver en toda la aplicacion, eso hacemos con este js
export default combineReducers({
  usuariosReducers,
});
