const initialState = {
  number: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, number: state.number + 1 };
    case 'dicrease':
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};
