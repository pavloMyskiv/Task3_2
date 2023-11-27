import { INCREASE, DICREASE } from "./counterTypes";

const increaseAction = () => {
  return {
    type: INCREASE,
  };
};
const dicreaseAction = () => {
  return {
    type: DICREASE,
  };
};

export { increaseAction, dicreaseAction };
