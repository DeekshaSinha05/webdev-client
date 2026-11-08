
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as db from "../../database";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signin = () => {
    const user = db.users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (!user) return;
    setCurrentUser(user);
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen" className="mx-auto mt-10 w-full max-w-sm">
      <h3 className="mb-6 text-3xl font-bold">Sign in</h3>

      <input
        placeholder="username"
        id="wd-username"
        className="wd-username mb-3 w-full rounded border border-gray-300 px-4 py-3"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />

      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className="wd-password mb-4 w-full rounded border border-gray-300 px-4 py-3"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />

      <label
        htmlFor="wd-ai-signin-note"
        className="mb-2 block font-medium"
      >
        Sample note
      </label>

      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className="mb-4 w-full rounded border border-gray-300 px-4 py-3"
      />

      <button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="mb-4 block w-full rounded bg-blue-600 px-4 py-3 text-center text-white no-underline"
      >
        Sign in
      </button>

      <Link
        href="/account/signup"
        id="wd-signup-link"
        className="block text-blue-700 hover:underline"
      >
        Sign up
      </Link>
    </div>
  );
}
