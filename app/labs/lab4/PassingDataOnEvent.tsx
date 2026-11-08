
"use client";

export default function PassingDataOnEvent() {
  const hello = () => alert("Hello World!");
  const lifeIs = (good: string) => alert(good);

  return (
    <div id="wd-passing-data-on-event">
      <h2>Passing Data on Event</h2>
      <button
        type="button"
        id="wd-pass-data-click"
        className="me-2 rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
        onClick={hello}
      >
        Pass Data
      </button>
      <button
        type="button"
        id="wd-pass-data-parameter-click"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={() => lifeIs("Life is Good!")}
      >
        Pass Data Parameter
      </button>
      <button
        type="button"
        id="wd-pass-data-personal-click"
        onClick={() => lifeIs("Learning React")}
      >
        My Message
      </button>
      <button
        type="button"
        id="wd-pass-data-course-click"
        onClick={() => lifeIs("Web Development")}
      >
        Web Development
      </button>
      <hr />
    </div>
  );
}
