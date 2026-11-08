
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="mb-3 flex flex-wrap items-center gap-2">
      <button
        type="button"
        className="rounded border border-gray-300 bg-gray-100 px-4 py-2"
      >
        Collapse All
      </button>
      <button
        type="button"
        className="rounded border border-gray-300 bg-gray-100 px-4 py-2"
      >
        View Progress
      </button>
      <select
        defaultValue="publish-all"
        className="rounded border border-gray-300 bg-gray-100 px-4 py-2"
      >
        <option value="publish-all">Publish All</option>
        <option value="unpublish-all">Unpublish All</option>
      </select>
      <ModuleEditor />
    </div>
  );
}
