
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-assignments" className="w-full">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            id="wd-search-assignment"
            placeholder="Search for Assignments"
            className="rounded border border-gray-300 py-2 pl-9 pr-4"
          />
        </div>

        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="flex items-center gap-2 rounded border border-gray-300 bg-gray-100 px-4 py-2"
          >
            <FaPlus />
            Group
          </button>

          <button
            id="wd-add-assignment"
            type="button"
            className="flex items-center gap-2 rounded bg-red-700 px-4 py-2 text-white"
          >
            <FaPlus />
            Assignment
          </button>
        </div>
      </div>

      <div className="border border-gray-300">
        <h3
          id="wd-assignments-title"
          className="flex items-center justify-between bg-gray-200 p-4 text-lg font-bold"
        >
          <span>ASSIGNMENTS 40% of Total</span>

          <button
            type="button"
            className="rounded px-2 py-1 text-xl"
          >
            <FaPlus />
          </button>
        </h3>

        <ul id="wd-assignment-list" className="m-0 list-none p-0">
          <AssignmentItem
            cid={cid}
            aid="123"
            title="A1 - ENV + HTML"
            details="Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts"
          />

          <AssignmentItem
            cid={cid}
            aid="124"
            title="A2 - CSS + TAILWIND"
            details="Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts"
          />

          <AssignmentItem
            cid={cid}
            aid="125"
            title="A3 - JAVASCRIPT + REACT"
            details="Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts"
          />

          <AssignmentItem
            cid={cid}
            aid="126"
            title="A4 - Responsive Web Design"
            details="Multiple Modules | Due June 3 at 11:59pm | 100 pts"
          />

          <AssignmentItem
            cid={cid}
            aid="ai-a"
            title="A9 - Sample assignment"
            details="Multiple Modules | Due June 10 at 11:59pm | 100 pts"
          />
        </ul>
      </div>
    </div>
  );
}
