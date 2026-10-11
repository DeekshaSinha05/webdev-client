
import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="mx-auto mt-10 w-full max-w-sm">
      <h3 className="mb-6 text-3xl font-bold">Sign up</h3>

      <input
        placeholder="username"
        className="wd-username mb-3 w-full rounded border border-gray-300 px-4 py-3"
        defaultValue="ada"
      />

      <input
        placeholder="password"
        type="password"
        className="wd-password mb-3 w-full rounded border border-gray-300 px-4 py-3"
        defaultValue="123"
      />

      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-4 w-full rounded border border-gray-300 px-4 py-3"
      />

      <Link
        href="/account/profile"
        className="mb-4 block rounded bg-blue-600 px-4 py-3 text-center text-white no-underline"
      >
        Sign up
      </Link>

      <Link
        href="/account/signin"
        className="block text-blue-700 hover:underline"
      >
        Sign in
      </Link>
    </div>
  );
}
