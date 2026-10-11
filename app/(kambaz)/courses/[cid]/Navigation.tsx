
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();

  const links = [
    { id: "wd-course-home-link", label: "Home", href: `/courses/${cid}/home` },
    { id: "wd-course-modules-link", label: "Modules", href: `/courses/${cid}/modules` },
    { id: "wd-course-piazza-link", label: "Piazza", href: `/courses/${cid}/piazza` },
    { id: "wd-course-zoom-link", label: "Zoom", href: `/courses/${cid}/zoom` },
    { id: "wd-course-assignments-link", label: "Assignments", href: `/courses/${cid}/assignments` },
    { id: "wd-course-quizzes-link", label: "Quizzes", href: `/courses/${cid}/quizzes` },
    { id: "wd-course-grades-link", label: "Grades", href: `/courses/${cid}/grades` },
    { id: "wd-course-people-link", label: "People", href: `/courses/${cid}/people/table` },
  ];

  return (
    <div
      id="wd-courses-navigation"
      className="flex w-[140px] flex-col"
    >
      {links.map((link) => {
        const active =
          pathname === link.href ||
          pathname.startsWith(`${link.href}/`) ||
          (link.label === "People" &&
            pathname.startsWith(`/courses/${cid}/people`));

        return (
          <Link
            key={link.id}
            href={link.href}
            id={link.id}
            className={`border-l-[3px] px-4 py-2 no-underline ${
              active
                ? "border-black font-semibold text-black"
                : "border-transparent text-red-700"
            }`}
          >
            {link.label}
          </Link>
        );
      })}

      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-ai-link"
        className="border-l-[3px] border-transparent px-4 py-2 text-red-700 no-underline"
      >
        Sample
      </Link>
    </div>
  );
}
