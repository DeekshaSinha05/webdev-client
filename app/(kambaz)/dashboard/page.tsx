
import CourseCard from "./CourseCard";
import * as db from "../database";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard" className="flex-1 p-6">
      <h1 id="wd-dashboard-title" className="mb-4 text-3xl font-bold">
        Dashboard
      </h1>
      <hr className="border-gray-300" />

      <h2
        id="wd-dashboard-published"
        className="my-4 text-2xl font-bold"
      >
        Published Courses ({courses.length})
      </h2>
      <hr className="border-gray-300" />

      <div
        id="wd-dashboard-courses"
        className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((course) => (
          <CourseCard key={course._id} {...course} />
        ))}
      </div>
    </div>
  );
}
