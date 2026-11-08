
"use client";

export default function ClickEvent() {
  const hello = () => {
    alert("Hello World!");
  };

  const goodbye = () => {
    alert("Goodbye World!");
  };

  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      <button
        type="button"
        onClick={() => alert("Hello Deeksha Sinha!")}
        id="wd-onclick-personal"
      >
        My Greeting
      </button>
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
      >
        Click Goodbye
      </button>
      <hr />
    </div>
  );
}
