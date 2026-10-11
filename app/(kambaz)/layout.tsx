
import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./kambaz.css";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz" className="font-sans">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        {children}
      </div>
    </div>
  );
}
