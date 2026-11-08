
"use client";

import { useEffect, useState } from "react";

export default function Effect() {
  const [name, setName] = useState("Kambaz");
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${name} — clicked ${count}`;
    console.log(name, count);
  }, [name, count]);

  return (
    <div id="wd-use-effect">
      <h2>useEffect</h2>
      <p>
        The document title updates after React paints, whenever{" "}
        <code>name</code> or <code>count</code> changes.
      </p>
      <input
        id="wd-effect-name"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        id="wd-effect-count-click"
        type="button"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={() => setCount((previous) => previous + 1)}
      >
        Clicked {count}
      </button>
      <hr />
    </div>
  );
}
