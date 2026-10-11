
import type { ReactNode } from "react";
import GreenCheckmark from "./GreenCheckmark";

export default function Module({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-6 list-none border border-gray-300">
      <div className="wd-title flex items-center justify-between bg-gray-200 p-4 font-bold">
        <span>{title}</span>
        <GreenCheckmark />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">
        {children}
      </ul>
    </li>
  );
}
