
import Link from "next/link";

export default function Profile() {
  const inputStyle =
    "mb-3 w-full rounded border border-gray-300 px-4 py-3";

  return (
    <div id="wd-profile-screen" className="mx-auto mt-10 w-full max-w-sm">
      <h3 className="mb-6 text-3xl font-bold">Profile</h3>

      <input
        defaultValue="alice"
        placeholder="username"
        className={`wd-username ${inputStyle}`}
      />

      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className={`wd-password ${inputStyle}`}
      />

      <input
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        className={inputStyle}
      />

      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className={inputStyle}
      />

      <input
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        className={inputStyle}
      />

      <input
        defaultValue="alice@wonderland"
        type="email"
        id="wd-email"
        className={inputStyle}
      />

      <select
        defaultValue="FACULTY"
        id="wd-role"
        className={`${inputStyle} bg-white`}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link
        href="/account/signin"
        className="mt-2 block rounded bg-red-700 px-4 py-3 text-center text-white no-underline"
      >
        Sign out
      </Link>
    </div>
  );
}
