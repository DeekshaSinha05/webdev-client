
import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="mx-auto mt-10 w-full max-w-sm">
      <h3 className="mb-6 text-3xl font-bold">Sign in</h3>

      <input
        placeholder="username"
        className="wd-username mb-3 w-full rounded border border-gray-300 px-4 py-3"
        defaultValue="ada"
      />

      <input
        placeholder="password"
        type="password"
        className="wd-password mb-4 w-full rounded border border-gray-300 px-4 py-3"
        defaultValue="123"
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

      <Link
        href="/dashboard"
        id="wd-signin-btn"
        className="mb-4 block rounded bg-blue-600 px-4 py-3 text-center text-white no-underline"
      >
        Sign in
      </Link>

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
