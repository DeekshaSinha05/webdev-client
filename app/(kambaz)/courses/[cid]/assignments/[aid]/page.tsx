
import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;

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
          defaultValue="A1 - ENV + HTML"
          className={inputStyle}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="wd-description"
          className="mb-2 block font-medium"
        >
          Description
        </label>

        <textarea
          id="wd-description"
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
          className={`${inputStyle} min-h-[160px]`}
        />
      </div>

      <div className={rowStyle}>
        <label htmlFor="wd-points" className={labelStyle}>
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={100}
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
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className={rowStyle}>
        <label
          htmlFor="wd-display-grade-as"
          className={labelStyle}
        >
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="Percentage"
          className={inputStyle}
        >
          <option value="Percentage">Percentage</option>
        </select>
      </div>

      <div className={rowStyle}>
        <label
          htmlFor="wd-submission-type"
          className={labelStyle}
        >
          Submission Type
        </label>
        <select
          id="wd-submission-type"
          defaultValue="Online"
          className={inputStyle}
        >
          <option value="Online">Online</option>
        </select>
      </div>

      <div className={rowStyle}>
        <span className={labelStyle}>
          Online Entry Options
        </span>

        <div className="flex flex-col gap-3 rounded border border-gray-300 p-4">
          <label className="flex items-center gap-2">
            <input
              id="wd-text-entry"
              type="checkbox"
              defaultChecked
            />
            Text Entry
          </label>

          <label className="flex items-center gap-2">
            <input
              id="wd-website-url"
              type="checkbox"
              defaultChecked
            />
            Website URL
          </label>

          <label className="flex items-center gap-2">
            <input
              id="wd-media-recordings"
              type="checkbox"
            />
            Media Recordings
          </label>

          <label className="flex items-center gap-2">
            <input
              id="wd-student-annotation"
              type="checkbox"
            />
            Student Annotation
          </label>

          <label className="flex items-center gap-2">
            <input
              id="wd-file-upload"
              type="checkbox"
            />
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
        />
      </div>

      <div className={rowStyle}>
        <label htmlFor="wd-due-date" className={labelStyle}>
          Due
        </label>
        <input
          id="wd-due-date"
          type="date"
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
          className={inputStyle}
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="wd-ai-editor-notes"
          className="mb-2 block font-medium"
        >
          Sample notes
        </label>

        <textarea
          id="wd-ai-editor-notes"
          className={`${inputStyle} min-h-[100px]`}
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

        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-700 px-5 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
