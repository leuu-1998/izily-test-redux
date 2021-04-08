//initial state of users
const INITIAL_STATE = {
  users: [1, 2, 3],
};

const usuariosReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "traer_usuarios":
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default usuariosReducers;
