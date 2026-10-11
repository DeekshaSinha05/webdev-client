
import { FaPlus } from "react-icons/fa";
import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
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
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Introduction to the course
            </li>
            <li className="wd-content-item">
              Learn what is Web Development
            </li>
          </Lesson>

          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>

          <Lesson title="SLIDES">
            <li className="wd-content-item">
              Introduction to Web Development
            </li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">
              Creating a React Application
            </li>
          </Lesson>
        </Module>

        <Module title="Week 2">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Learn how to create user interfaces with HTML
            </li>
          </Lesson>
        </Module>

        <Module title="Week 3">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              CSS Styling
            </li>
          </Lesson>
        </Module>

        <Module title="Week 4 - Responsive Web Design">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Build responsive layouts using Tailwind CSS
            </li>
          </Lesson>
        </Module>

        <Module title="Sample module (AI)">
          <Lesson title="Sample lesson (AI)">
            <li className="wd-content-item">
              Sample lesson content
            </li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}
