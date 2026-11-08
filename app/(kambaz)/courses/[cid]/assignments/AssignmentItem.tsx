"use client";

import Link from "next/link";
import { FaFileAlt, FaCheckCircle, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  canEdit,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  canEdit: boolean;
}) {
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);

  return (
    <li className="wd-assignment-list-item flex items-center gap-4 border-t border-l-4 border-t-gray-300 border-l-green-600 bg-white p-4">
      <FaFileAlt className="shrink-0 text-2xl text-green-600" />

      <div className="min-w-0 flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-bold text-black no-underline hover:underline"
        >
          {title}
        </Link>

        <p className="mt-1 text-sm text-gray-600">
          {details}
        </p>
      </div>

      {canEdit && (
        <button
          type="button"
          id={`wd-delete-assignment-${aid}`}
          className="rounded p-2 text-red-600"
          title="Delete assignment"
          aria-label={`Delete ${title}`}
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this assignment?")) {
              deleteAssignment(aid);
            }
          }}
        >
          <FaTrash />
        </button>
      )}

      <FaCheckCircle className="shrink-0 text-lg text-green-600" />
    </li>
  );
}
