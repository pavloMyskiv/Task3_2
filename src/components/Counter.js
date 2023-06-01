import { useSelector, useDispatch } from 'react-redux';
import {
  increaseAction,
  dicreaseAction,
} from '../store/actions/counterActions';

export const Counter = () => {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increaseAction());
  };
  const dicrease = () => {
    dispatch(dicreaseAction());
  };

  return (
    <div className="counter">
      <button onClick={increase}>plus</button>
      <p>{useSelector((state) => state.number)}</p>
      <button onClick={dicrease}>minus</button>
    </div>
  );
};
