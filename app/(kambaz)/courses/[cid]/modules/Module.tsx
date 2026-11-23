
"use client";

import { useEffect, useState } from "react";
import Lesson from "./Lesson";
import ModuleControlButtons from "./ModuleControlButtons";
import {
  useModulesStore,
  type CourseModule,
} from "../../../store/modulesStore";

export default function Module({
  module,
}: {
  module: CourseModule;
}) {
  const updateModule = useModulesStore(
    (state) => state.updateModule
  );
  const [name, setName] = useState(module.name);

  useEffect(() => {
    if (!module.editing) {
      setName(module.name);
    }
  }, [module.name, module.editing]);

  const save = () => {
    if (!module.editing) return;

    void updateModule({
      ...module,
      name,
      editing: false,
    });
  };

  return (
    <li className="wd-module mb-6 list-none border border-gray-300">
      <div className="wd-title flex items-center justify-between bg-gray-200 p-4 font-bold">
        {module.editing ? (
          <input
            className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            onBlur={save}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.currentTarget.blur();
              }
            }}
          />
        ) : (
          <span>{module.name}</span>
        )}

        <ModuleControlButtons
          moduleId={module._id}
        />
      </div>

      <ul className="wd-lessons m-0 list-none p-0">
        {module.lessons?.map((lesson) => (
          <Lesson
            key={lesson._id}
            title={lesson.name}
          />
        ))}
      </ul>
    </li>
  );
}
