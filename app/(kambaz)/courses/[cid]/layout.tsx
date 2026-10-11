
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;

  return (
    <div id="wd-courses" className="flex-1 p-6">
      <h2 className="mb-4 text-2xl font-bold">Courses {cid}</h2>
      <hr className="border-gray-300" />

      <div className="mt-4 flex gap-4">
        <div className="hidden w-[140px] shrink-0 md:block">
          <CourseNavigation cid={cid} />
        </div>

        <div className="min-w-0 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
