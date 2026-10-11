
import {
  FaCheckCircle,
  FaUpload,
  FaDownload,
  FaHome,
  FaStream,
  FaBullhorn,
  FaChartBar,
  FaBell,
  FaRegStar,
} from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function CourseStatus() {
  const actionStyle =
    "flex w-full items-center gap-2 rounded border border-gray-300 bg-gray-100 px-3 py-2 text-left text-sm";

  return (
    <div id="wd-course-status" className="w-full">
      <h2 className="mb-4 text-xl font-bold">Course Status</h2>

      <div className="mb-4 flex gap-2">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1 rounded border border-gray-300 bg-gray-200 px-2 py-2 text-xs"
        >
          <MdDoNotDisturbAlt />
          Unpublish
        </button>

        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1 rounded bg-green-600 px-2 py-2 text-xs text-white"
        >
          <FaCheckCircle />
          Publish
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <button type="button" className={actionStyle}>
          <FaUpload />
          Import Existing Content
        </button>

        <button type="button" className={actionStyle}>
          <FaDownload />
          Import from Commons
        </button>

        <button type="button" className={actionStyle}>
          <FaHome />
          Choose Home Page
        </button>

        <button type="button" className={actionStyle}>
          <FaStream />
          View Course Stream
        </button>

        <button type="button" className={actionStyle}>
          <FaBullhorn />
          New Announcement
        </button>

        <button type="button" className={actionStyle}>
          <FaChartBar />
          New Analytics
        </button>

        <button type="button" className={actionStyle}>
          <FaBell />
          View Course Notifications
        </button>

        <button
          id="wd-ai-status"
          type="button"
          className={actionStyle}
        >
          <FaRegStar />
          Sample action
        </button>
      </div>
    </div>
  );
}
