export const ADD_USER = "ADD_USER";

export function addUser(text) {
  return {
    type: ADD_USER,
    payload: {
      user: text,
      text: text,
    },
  };
}
