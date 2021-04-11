export const ADD_USER = "ADD_USER";

export function addUser(text) {
  return {
    //la prop payload se encarga de cambiar el estado de algo
    //y en reducers le diremos de que cambiara
    type: ADD_USER,
    payload: text,
  };
}
