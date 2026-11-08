
export default function ChildStateComponent({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (count: number) => void;
}) {
  return (
    <div id="wd-child-state">
      <h3>Counter {counter}</h3>
      <button
        type="button"
        id="wd-increment-child-state-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <button
        type="button"
        id="wd-decrement-child-state-click"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
      <button
        type="button"
        id="wd-reset-child-state-personal-click"
        onClick={() => setCounter(123)}
      >
        My Reset
      </button>
      <button
        type="button"
        id="wd-reset-child-state-click"
        onClick={() => setCounter(123)}
      >
        Reset
      </button>
    </div>
  );
}
