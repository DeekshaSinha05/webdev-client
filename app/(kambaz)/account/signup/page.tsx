
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signup = () => {
    if (!username || !password) return;
    setCurrentUser({
      _id: crypto.randomUUID(),
      username,
      password,
      firstName: "",
      lastName: "",
      email: "",
      role: "STUDENT",
      loginId: "",
      section: "",
      lastActivity: "",
      totalActivity: "",
    });
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen" className="mx-auto mt-10 w-full max-w-sm">
      <h3 className="mb-6 text-3xl font-bold">Sign up</h3>

      <input
        id="wd-username"
        placeholder="username"
        className="wd-username mb-3 w-full rounded border border-gray-300 px-4 py-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password mb-3 w-full rounded border border-gray-300 px-4 py-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-4 w-full rounded border border-gray-300 px-4 py-3"
      />

      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-4 block rounded bg-blue-600 px-4 py-3 text-center text-white no-underline"
      >
        Sign up
      </button>

      <Link
        href="/account/signin"
        id="wd-signin-link"
        className="block text-blue-700 hover:underline"
      >
        Sign in
      </Link>
    </div>
  );
}
