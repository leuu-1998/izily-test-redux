import React from "react";
//redux connect para conectar este componente con el almacenamiento global
//useSelector nos trae el estado actual o una parte
//useDispatch nos permite actualizar un estado con una action para llamar un reducer
import { connect, useSelector } from "react-redux";
import { addUser } from "../actions/actionUsers";

const Landing = ({ dispatch, addUser }) => {
  let input;
  //creamos la const de y le asignamos los datos de la app
  const usuarios = useSelector((state) => state);
  //imprimimos en pantalla
  console.log("los datos son ", usuarios);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    addUser(input.value);
    input.value = "";
  };

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <div>Agregaras un usuario</div>
        <input
          type="text"
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Añadir tarea</button>
      </form>
    </div>
  );
};
//colocamos el conect y definimos las constantes
//como parametro le damos todos los reducers
// pero como queremos solo el de los usuarios
//y como solo queremos el reducer de usuarios eso retornamos
//...
//pasamos ese const a connect
//connect(recuperar_algo-de_store,modificar_algo-de_store)
export default connect(null, { addUser })(Landing);
