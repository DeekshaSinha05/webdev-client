
export type Role = "" | "STUDENT" | "TA" | "FACULTY";
export type Theme = "light" | "dark";

export type Profile = {
  firstName: string;
  lastName: string;
  password: string;
  dob: Date | null;
  role: Role;
  newsletter: boolean;
  topics: string[];
  theme: Theme;
};

export type ProfileErrors = Partial<Record<keyof Profile, string>>;

export const TOPICS = ["HTML", "CSS", "React"];

export const emptyProfile: Profile = {
  firstName: "",
  lastName: "",
  password: "",
  dob: null,
  role: "",
  newsletter: false,
  topics: [],
  theme: "light",
};

export function dateToHtml(date: Date | null) {
  if (date === null) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function htmlToDate(value: string) {
  if (value === "") return null;

  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function validateProfile(profile: Profile): ProfileErrors {
  const errors: ProfileErrors = {};

  if (!profile.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!profile.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (profile.password.length < 8) {
    errors.password = "Password needs at least 8 characters.";
  }

  if (profile.dob === null || profile.dob.getTime() > Date.now()) {
    errors.dob = "Pick a date of birth in the past.";
  }

  if (!profile.role) {
    errors.role = "Choose a role.";
  }

  if (profile.topics.length === 0) {
    errors.topics = "Pick at least one topic.";
  }

  return errors;
}
