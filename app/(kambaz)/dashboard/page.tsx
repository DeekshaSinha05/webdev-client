
import CourseCard from "./CourseCard";

export default function Dashboard() {
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
        Published Courses (5)
      </h2>
      <hr className="border-gray-300" />

      <div
        id="wd-dashboard-courses"
        className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="/images/reactjs.jpg"
        />

        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="/images/nodejs.jpg"
        />

        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="/images/mongodb.jpg"
        />

        <CourseCard
          id="4567"
          title="CS4567 Web Development Practice"
          subtitle="HTML, CSS, Tailwind and responsive layouts"
          image="/images/reactjs.jpg"
        />

        <CourseCard
          id="CS9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample — not my course"
          image="/images/reactjs.jpg"
        />
      </div>
    </div>
  );
}
