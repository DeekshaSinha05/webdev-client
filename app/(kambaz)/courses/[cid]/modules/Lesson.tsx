
import type { ReactNode } from "react";
import GreenCheckmark from "./GreenCheckmark";

export default function Lesson({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-lesson list-none border-t border-gray-300 border-l-4 border-l-green-600 bg-white">
      <div className="wd-title flex items-center justify-between p-4 font-bold">
        <span>{title}</span>
        <GreenCheckmark />
      </div>
      <ul className="wd-content m-0 list-none p-0">
        {children}
      </ul>
    </li>
  );
}
