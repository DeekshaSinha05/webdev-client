
"use client";

import { useParams } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import Module from "./Module";
import Lesson from "./Lesson";
import * as db from "../../../database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((module) => module.course === cid);

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-wrap items-center justify-end gap-2">
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

        <button
          type="button"
          className="flex items-center gap-2 rounded bg-red-700 px-4 py-2 text-white"
        >
          <FaPlus />
          Module
        </button>
      </div>

      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} title={module.name}>
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
