
import Link from "next/link";
import Image from "next/image";

export default function CourseCard({
  id,
  title,
  subtitle,
  image,
}: {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
      <Link
        href={`/courses/${id}/home`}
        className="wd-dashboard-course-link block text-inherit no-underline"
      >
        <Image
          src={image}
          width={300}
          height={160}
          alt={title}
          className="h-40 w-full object-cover"
        />

        <div className="p-4">
          <h5 className="mb-2 truncate text-lg font-bold text-blue-700">
            {title}
          </h5>

          <p className="wd-dashboard-course-title mb-4 h-[100px] overflow-hidden text-sm text-gray-600">
            {subtitle}
          </p>

          <button
            type="button"
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            Go
          </button>
        </div>
      </Link>
    </div>
  );
}
