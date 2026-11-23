
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import usersJson from "../database/users.json";
import * as client from "./client";

export type User = (typeof usersJson)[number];

export const emptyUser: User = {
  _id: "0",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "STUDENT",
  loginId: "",
  section: "",
  lastActivity: "",
  totalActivity: "",
};

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  authLoading: boolean;
};

const AccountContext =
  createContext<AccountContextValue | null>(null);

export function AccountProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentUser, setCurrentUser] =
    useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    client
      .profile()
      .then(setCurrentUser)
      .catch(() => setCurrentUser(null))
      .finally(() => setAuthLoading(false));
  }, []);

  return (
    <AccountContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        authLoading,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);

  if (!value) {
    throw new Error(
      "useAccountContext must be used inside AccountProvider"
    );
  }

  return value;
}
