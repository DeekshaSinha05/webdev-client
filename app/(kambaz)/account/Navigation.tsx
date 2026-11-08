
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useAccountContext();

  const links = currentUser
    ? [
        { id: "wd-account-profile-link", label: "Profile", href: "/account/profile" },
      ]
    : [
        { id: "wd-account-signin-link", label: "Signin", href: "/account/signin" },
        { id: "wd-account-signup-link", label: "Signup", href: "/account/signup" },
      ];

  return (
    <div id="wd-account-navigation" className="flex w-[140px] flex-col">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          id={link.id}
          className={`border-l-[3px] px-4 py-2 no-underline ${
            pathname === link.href
              ? "border-black font-semibold text-black"
              : "border-transparent text-red-700"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
