
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] =
    useState("");

  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signup = async () => {
    if (!username || !password) return;

    if (password !== verifyPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const user = await client.signup({
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

      setCurrentUser(user);
      router.push("/account/profile");
    } catch {
      alert("Username already in use");
    }
  };

  return (
    <div
      id="wd-signup-screen"
      className="mx-auto mt-10 w-full max-w-sm"
    >
      <h3 className="mb-6 text-3xl font-bold">
        Sign up
      </h3>

      <input
        id="wd-username"
        placeholder="username"
        className="wd-username mb-3 w-full rounded border border-gray-300 px-4 py-3"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password mb-3 w-full rounded border border-gray-300 px-4 py-3"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <input
        placeholder="verify password"
        value={verifyPassword}
        onChange={(e) =>
          setVerifyPassword(e.target.value)
        }
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
