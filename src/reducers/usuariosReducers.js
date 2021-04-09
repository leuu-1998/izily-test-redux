//initial state of users
const INITIAL_STATE = {
  user: "leonardo",
};

//le pasamos el estado aterior y luego la accion que queremos realizar
const usuariosReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      //retorna la copia del estado y agrega un objeto llamado
      //action.payload
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default usuariosReducers;
