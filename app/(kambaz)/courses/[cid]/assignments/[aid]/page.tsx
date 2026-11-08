"use client";

import { useState } from "react";
import Link from "next/link";
import { redirect, useParams, useRouter } from "next/navigation";
import { useAssignmentsStore, type Assignment } from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const assignmentId = typeof aid === "string" ? aid : "";
  const { currentUser } = useAccountContext();
  const canEdit = currentUser?.role === "FACULTY";
  const assignments = useAssignmentsStore((state) => state.assignments);
  const existing = assignments.find(
    (assignment) => assignment._id === assignmentId && assignment.course === courseId,
  );
  const isNew = assignmentId === "new";

  if (isNew && !canEdit) {
    redirect(`/courses/${courseId}/assignments`);
  }

  if (!isNew && !existing) {
    return (
      <div id="wd-assignments-editor" className="max-w-4xl">
        <p>Assignment not found.</p>
        <Link href={`/courses/${courseId}/assignments`}>Back to Assignments</Link>
      </div>
    );
  }

  const initialAssignment: Assignment = isNew
    ? {
        _id: "",
        title: "",
        course: courseId,
        description: "",
        points: 100,
        due: "",
        available: "",
        until: "",
      }
    : { ...existing!, until: existing!.until ?? "" };

  return (
    <AssignmentForm
      key={`${courseId}-${assignmentId}`}
      cid={courseId}
      aid={assignmentId}
      initialAssignment={initialAssignment}
      isNew={isNew}
      canEdit={canEdit}
    />
  );
}

function AssignmentForm({
  cid,
  aid,
  initialAssignment,
  isNew,
  canEdit,
}: {
  cid: string;
  aid: string;
  initialAssignment: Assignment;
  isNew: boolean;
  canEdit: boolean;
}) {
  const [assignment, setAssignment] = useState<Assignment>(initialAssignment);
  const [pointsInput, setPointsInput] = useState(String(initialAssignment.points));
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const router = useRouter();

  const save = () => {
    if (!canEdit || pointsInput.trim() === "") return;
    const points = Number(pointsInput);
    if (!Number.isFinite(points) || points < 0) return;
    const savedAssignment = { ...assignment, course: cid, points };
    if (isNew) {
      addAssignment(savedAssignment);
    } else {
      updateAssignment({ ...savedAssignment, _id: initialAssignment._id });
    }
    router.push(`/courses/${cid}/assignments`);
  };

  const inputStyle =
    "w-full rounded border border-gray-300 bg-white px-3 py-2";
  const rowStyle =
    "mb-4 grid grid-cols-1 gap-2 md:grid-cols-[180px_minmax(0,1fr)] md:gap-6";
  const labelStyle = "font-medium md:pt-2 md:text-right";

  return (
    <div id="wd-assignments-editor" className="max-w-4xl">
      <div className="mb-6">
        <label htmlFor="wd-name" className="mb-2 block font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          readOnly={!canEdit}
          className={inputStyle}
        />
      </div>

      {!isNew && <p className="mb-4">Assignment id: {aid}</p>}

      <div className="mb-6">
        <label htmlFor="wd-description" className="mb-2 block font-medium">
          Description
        </label>
        <textarea
          id="wd-description"
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
          readOnly={!canEdit}
          className={`${inputStyle} min-h-[160px]`}
        />
      </div>

      <div className={rowStyle}>
        <label htmlFor="wd-points" className={labelStyle}>
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          min="0"
          value={pointsInput}
          onChange={(e) => setPointsInput(e.target.value)}
          readOnly={!canEdit}
          className={inputStyle}
        />
      </div>

      <div className={rowStyle}>
        <label htmlFor="wd-group" className={labelStyle}>
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className={inputStyle}
          disabled={!canEdit}
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className={rowStyle}>
        <label htmlFor="wd-display-grade-as" className={labelStyle}>
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="Percentage"
          className={inputStyle}
          disabled={!canEdit}
        >
          <option value="Percentage">Percentage</option>
        </select>
      </div>

      <div className={rowStyle}>
        <label htmlFor="wd-submission-type" className={labelStyle}>
          Submission Type
        </label>
        <select
          id="wd-submission-type"
          defaultValue="Online"
          className={inputStyle}
          disabled={!canEdit}
        >
          <option value="Online">Online</option>
        </select>
      </div>

      <div className={rowStyle}>
        <span className={labelStyle}>Online Entry Options</span>
        <div className="flex flex-col gap-3 rounded border border-gray-300 p-4">
          <label className="flex items-center gap-2">
            <input id="wd-text-entry" type="checkbox" defaultChecked disabled={!canEdit} />
            Text Entry
          </label>

          <label className="flex items-center gap-2">
            <input id="wd-website-url" type="checkbox" defaultChecked disabled={!canEdit} />
            Website URL
          </label>

          <label className="flex items-center gap-2">
            <input id="wd-media-recordings" type="checkbox" disabled={!canEdit} />
            Media Recordings
          </label>

          <label className="flex items-center gap-2">
            <input id="wd-student-annotation" type="checkbox" disabled={!canEdit} />
            Student Annotation
          </label>

          <label className="flex items-center gap-2">
            <input id="wd-file-upload" type="checkbox" disabled={!canEdit} />
            File Upload
          </label>
        </div>
      </div>

      <div className={rowStyle}>
        <label htmlFor="wd-assign-to" className={labelStyle}>
          Assign to
        </label>
        <input
          id="wd-assign-to"
          defaultValue="Everyone"
          className={inputStyle}
          readOnly={!canEdit}
        />
      </div>

      <div className={rowStyle}>
        <label htmlFor="wd-due-date" className={labelStyle}>
          Due
        </label>
        <input
          id="wd-due-date"
          type="date"
          value={assignment.due}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
          readOnly={!canEdit}
          className={inputStyle}
        />
      </div>

      <div className={rowStyle}>
        <label htmlFor="wd-available-from" className={labelStyle}>
          Available from
        </label>
        <input
          id="wd-available-from"
          type="date"
          value={assignment.available}
          onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
          readOnly={!canEdit}
          className={inputStyle}
        />
      </div>

      <div className={rowStyle}>
        <label htmlFor="wd-available-until" className={labelStyle}>
          Until
        </label>
        <input
          id="wd-available-until"
          type="date"
          value={assignment.until ?? ""}
          onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
          readOnly={!canEdit}
          className={inputStyle}
        />
      </div>

      <div className="mt-6 flex justify-end gap-3 border-t border-gray-300 pt-4">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-gray-300 bg-gray-100 px-5 py-2 text-black no-underline"
        >
          Cancel
        </Link>

        {canEdit && (
          <button
            type="button"
            onClick={save}
            id="wd-save"
            className="rounded bg-red-700 px-5 py-2 text-white no-underline"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
