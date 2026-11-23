
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useAccountContext,
  type User,
} from "../AccountContext";
import * as client from "../client";

export default function Profile() {
  const inputStyle =
    "mb-3 w-full rounded border border-gray-300 px-4 py-3";

  const [profile, setProfile] =
    useState<User | null>(null);

  const {
    currentUser,
    setCurrentUser,
    authLoading,
  } = useAccountContext();

  const router = useRouter();

  useEffect(() => {
    if (authLoading) return;

    if (!currentUser) {
      router.push("/account/signin");
      return;
    }

    setProfile(currentUser);
  }, [currentUser, router, authLoading]);

  const signout = async () => {
    await client.signout();
    setCurrentUser(null);
    router.push("/account/signin");
  };

  const updateProfile = async () => {
    if (!profile) return;

    const user = await client.updateUser(profile);
    setCurrentUser(user);
  };

  if (authLoading || !profile) return null;

  return (
    <div
      id="wd-profile-screen"
      className="mx-auto mt-10 w-full max-w-sm"
    >
      <h3 className="mb-6 text-3xl font-bold">
        Profile
      </h3>

      <input
        id="wd-username"
        placeholder="username"
        className={`wd-username ${inputStyle}`}
        value={profile.username}
        onChange={(e) =>
          setProfile({
            ...profile,
            username: e.target.value,
          })
        }
      />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className={`wd-password ${inputStyle}`}
        value={profile.password}
        onChange={(e) =>
          setProfile({
            ...profile,
            password: e.target.value,
          })
        }
      />

      <input
        placeholder="First Name"
        id="wd-firstname"
        className={inputStyle}
        value={profile.firstName}
        onChange={(e) =>
          setProfile({
            ...profile,
            firstName: e.target.value,
          })
        }
      />

      <input
        placeholder="Last Name"
        id="wd-lastname"
        className={inputStyle}
        value={profile.lastName}
        onChange={(e) =>
          setProfile({
            ...profile,
            lastName: e.target.value,
          })
        }
      />

      <input
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        className={inputStyle}
      />

      <input
        type="email"
        id="wd-email"
        className={inputStyle}
        value={profile.email}
        onChange={(e) =>
          setProfile({
            ...profile,
            email: e.target.value,
          })
        }
      />

      <select
        value={profile.role}
        disabled
        onChange={(e) =>
          setProfile({
            ...profile,
            role: e.target.value,
          })
        }
        id="wd-role"
        className={`${inputStyle} bg-white`}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <button
        type="button"
        id="wd-update-profile"
        onClick={updateProfile}
        className="mb-3 rounded bg-blue-600 px-4 py-3 text-white"
      >
        Update
      </button>

      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="mt-2 block w-full rounded bg-red-700 px-4 py-3 text-center text-white no-underline"
      >
        Sign out
      </button>
    </div>
  );
}
