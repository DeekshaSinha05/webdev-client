
import { useDispatch, useSelector } from "react-redux";
import {
  up,
  down,
  personalReset,
  reset,
} from "./counterReducer";
import type { RootState } from "./store";

export default function CounterRedux() {
  const count = useSelector(
    (state: RootState) => state.counterReducer.count
  );
  const dispatch = useDispatch();

  return (
    <div id="wd-redux-counter">
      <h3>Redux Counter: {count}</h3>
      <button
        type="button"
        id="wd-redux-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={() => dispatch(up())}
      >
        Up
      </button>
      <button
        type="button"
        id="wd-redux-down-click"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={() => dispatch(down())}
      >
        Down
      </button>
      <button
        type="button"
        id="wd-redux-personal-reset-click"
        onClick={() => dispatch(personalReset())}
      >
        My Reset
      </button>
      <button
        type="button"
        id="wd-redux-reset-click"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}
