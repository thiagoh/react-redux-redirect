const INITIAL_STATE = {
  user: '',
  claps: 0
};

export const MainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN_USER':
      return { ...state, user: action.payload.payload };
      break;
    case 'ADD_CLAPS':
      return { ...state, claps: state.claps + 1 };
      break;
    default:
      return state;
  }
};
