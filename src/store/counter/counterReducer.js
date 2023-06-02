import { INCREASE, DICREASE } from "./counterTypes";

const initialState = {
  number: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1 };
    case DICREASE:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};
