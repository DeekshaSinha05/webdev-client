
import Link from "next/link";
import { FaFileAlt, FaCheckCircle } from "react-icons/fa";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
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

      <FaCheckCircle className="shrink-0 text-lg text-green-600" />
    </li>
  );
}
