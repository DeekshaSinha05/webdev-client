
"use client";

import useLocalStorage from "./useLocalStorage";

const TABS = ["Monday", "Tuesday", "Wednesday"];

export default function LocalStorageDemo() {
  const [tab, setTab] = useLocalStorage("wd-hooks-tab", TABS[0]);

  return (
    <div id="wd-local-storage-demo">
      <h3>useLocalStorage</h3>
      <div className="flex gap-2">
        {TABS.map((day) => (
          <button
            type="button"
            key={day}
            onClick={() => setTab(day)}
            className={
              day === tab
                ? "rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
                : "rounded border border-neutral-300 px-3 py-1.5 text-sm"
            }
          >
            {day}
          </button>
        ))}
      </div>
      <p>Selected: {tab}. Reload the page and it stays selected.</p>
    </div>
  );
}
