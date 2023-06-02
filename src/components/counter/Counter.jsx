import { useSelector, useDispatch } from 'react-redux';
import {
  increaseAction,
  dicreaseAction,
} from '../../store/counter/counterActions';
import './Counter.css';

export const Counter = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);

  const increase = () => {
    dispatch(increaseAction());
  };
  const dicrease = () => {
    dispatch(dicreaseAction());
  };

  return (
    <div className="counter">
      <button onClick={increase}>plus</button>
      <p>{number}</p>
      <button onClick={dicrease}>minus</button>
    </div>
  );
};
