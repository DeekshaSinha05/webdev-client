
import {
  dateToHtml,
  htmlToDate,
  TOPICS,
  type Profile,
  type ProfileErrors,
  type Role,
} from "./profile";

const inputStyle =
  "block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5";
const errorStyle = "text-sm text-red-600";

export default function ProfileFields({
  prefix,
  profile,
  errors,
  setProfile,
}: {
  prefix: string;
  profile: Profile;
  errors: ProfileErrors;
  setProfile: (profile: Profile) => void;
}) {
  const toggleTopic = (topic: string) => {
    const topics = profile.topics.includes(topic)
      ? profile.topics.filter((item) => item !== topic)
      : [...profile.topics, topic];

    setProfile({ ...profile, topics });
  };

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={`${prefix}-first-name`}>First name</label>
      <input
        id={`${prefix}-first-name`}
        className={inputStyle}
        value={profile.firstName}
        onChange={(e) =>
          setProfile({ ...profile, firstName: e.target.value })
        }
      />
      {errors.firstName && (
        <p className={errorStyle}>{errors.firstName}</p>
      )}

      <label htmlFor={`${prefix}-last-name`}>Last name</label>
      <input
        id={`${prefix}-last-name`}
        className={inputStyle}
        value={profile.lastName}
        onChange={(e) =>
          setProfile({ ...profile, lastName: e.target.value })
        }
      />
      {errors.lastName && (
        <p className={errorStyle}>{errors.lastName}</p>
      )}

      <label htmlFor={`${prefix}-password`}>Password</label>
      <input
        id={`${prefix}-password`}
        type="password"
        className={inputStyle}
        value={profile.password}
        onChange={(e) =>
          setProfile({ ...profile, password: e.target.value })
        }
      />
      {errors.password && (
        <p className={errorStyle}>{errors.password}</p>
      )}

      <label htmlFor={`${prefix}-dob`}>Date of birth</label>
      <input
        id={`${prefix}-dob`}
        type="date"
        className={inputStyle}
        value={dateToHtml(profile.dob)}
        onChange={(e) =>
          setProfile({
            ...profile,
            dob: htmlToDate(e.target.value),
          })
        }
      />
      {errors.dob && (
        <p className={errorStyle}>{errors.dob}</p>
      )}

      <label htmlFor={`${prefix}-role`}>Role</label>
      <select
        id={`${prefix}-role`}
        className={inputStyle}
        value={profile.role}
        onChange={(e) =>
          setProfile({
            ...profile,
            role: e.target.value as Role,
          })
        }
      >
        <option value="">Choose a role</option>
        <option value="STUDENT">Student</option>
        <option value="TA">Teaching assistant</option>
        <option value="FACULTY">Faculty</option>
      </select>
      {errors.role && (
        <p className={errorStyle}>{errors.role}</p>
      )}

      <label className="flex items-center gap-2">
        <input
          id={`${prefix}-newsletter`}
          type="checkbox"
          checked={profile.newsletter}
          onChange={(e) =>
            setProfile({
              ...profile,
              newsletter: e.target.checked,
            })
          }
        />
        Email me the newsletter
      </label>

      <fieldset id={`${prefix}-topics`}>
        <legend>Topics</legend>
        {TOPICS.map((topic) => (
          <label
            key={topic}
            className="mr-4 inline-flex items-center gap-1"
          >
            <input
              type="checkbox"
              checked={profile.topics.includes(topic)}
              onChange={() => toggleTopic(topic)}
            />
            {topic}
          </label>
        ))}
      </fieldset>
      {errors.topics && (
        <p className={errorStyle}>{errors.topics}</p>
      )}

      <fieldset id={`${prefix}-theme`}>
        <legend>Theme</legend>
        <label className="mr-4 inline-flex items-center gap-1">
          <input
            type="radio"
            name={`${prefix}-theme`}
            checked={profile.theme === "light"}
            onChange={() =>
              setProfile({ ...profile, theme: "light" })
            }
          />
          Light
        </label>
        <label className="inline-flex items-center gap-1">
          <input
            type="radio"
            name={`${prefix}-theme`}
            checked={profile.theme === "dark"}
            onChange={() =>
              setProfile({ ...profile, theme: "dark" })
            }
          />
          Dark
        </label>
      </fieldset>
    </div>
  );
}
