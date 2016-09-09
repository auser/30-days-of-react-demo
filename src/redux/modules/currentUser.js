export const types = {
  'LOGIN': 'LOGIN',
  'LOGOUT': 'LOGOUT'
};

const initialState = {
  user: {},
  loggedIn: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state, user: action.payload, loggedIn: true};
    case types.LOGOUT:
      return {
        ...state, user: {}, loggedIn: false};
    default:
      return state;
  }
}

export const actions = {
  login: (user) => ({type: types.LOGIN, payload: user}),
  logout: () => ({type: types.LOGOUT})
}
