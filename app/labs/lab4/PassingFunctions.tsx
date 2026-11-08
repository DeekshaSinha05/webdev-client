
export default function PassingFunctions({
  message,
  theFunction,
  myFunction,
  theOtherFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  myFunction: () => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={myFunction}
        id="wd-pass-functions-personal-click"
      >
        My Function
      </button>
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
      >
        Other Function
      </button>
      <hr />
    </div>
  );
}
