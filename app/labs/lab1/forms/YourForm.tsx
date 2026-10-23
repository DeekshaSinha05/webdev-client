"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Personal Information</h5>

      <label htmlFor="wd-your-first-name">First Name:</label>
      <br />
      <input
        id="wd-your-first-name"
        type="text"
        defaultValue="Deeksha"
      />
      <br />

      <label htmlFor="wd-your-last-name">Last Name:</label>
      <br />
      <input
        id="wd-your-last-name"
        type="text"
        defaultValue="Sinha"
      />
      <br />

      <label htmlFor="wd-your-student-id">Student ID:</label>
      <br />
      <input
        id="wd-your-student-id"
        type="password"
        defaultValue="password123"
      />

      <h5>About Me</h5>

      <label htmlFor="wd-your-bio">Bio:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={50}
        rows={4}
        defaultValue="I'm a master's student pursuing Computer Science at Northeastern University in Boston."
      />

      <h5>Class Standing</h5>

      <input
        id="wd-your-undergraduate"
        type="radio"
        name="wd-your-standing"
      />
      <label htmlFor="wd-your-undergraduate">Undergraduate</label>
      <br />

      <input
        id="wd-your-graduate"
        type="radio"
        name="wd-your-standing"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>

      <h5>Study Status</h5>

      <input
        id="wd-your-full-time"
        type="radio"
        name="wd-your-study-status"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />

      <input
        id="wd-your-part-time"
        type="radio"
        name="wd-your-study-status"
      />
      <label htmlFor="wd-your-part-time">Part-time</label>

      <h5>Interests</h5>

      <input
        id="wd-your-distributed-systems"
        type="checkbox"
        defaultChecked
      />
      <label htmlFor="wd-your-distributed-systems">
        Distributed Systems
      </label>
      <br />

      <input
        id="wd-your-ai"
        type="checkbox"
        defaultChecked
      />
      <label htmlFor="wd-your-ai">
        Artificial Intelligence
      </label>
      <br />

      <input
        id="wd-your-web-development"
        type="checkbox"
        defaultChecked
      />
      <label htmlFor="wd-your-web-development">
        Web Development
      </label>

      <h5>Major</h5>

      <label htmlFor="wd-your-major">Major:</label>
      <br />
      <select
        id="wd-your-major"
        defaultValue="computer-science"
      >
        <option value="computer-science">Computer Science</option>
        <option value="data-science">Data Science</option>
        <option value="information-systems">Information Systems</option>
        <option value="software-engineering">Software Engineering</option>
      </select>

      <h5>Topics I Want to Deepen</h5>

      <label htmlFor="wd-your-topics">Select topics:</label>
      <br />
      <select
        id="wd-your-topics"
        multiple
        defaultValue={["web-development", "agentic-ai"]}
      >
        <option value="web-development">Web Development</option>
        <option value="agentic-ai">Agentic AI</option>
        <option value="system-design">System Design</option>
        <option value="problem-solving">
          LeetCode and Problem Solving
        </option>
      </select>

      <h5>Additional Information</h5>

      <label htmlFor="wd-your-email">School Email:</label>
      <br />
      <input
        id="wd-your-email"
        type="email"
        defaultValue="sinha.dee@northeastern.edu"
      />
      <br />

      <label htmlFor="wd-your-graduation-year">
        Expected Graduation Year:
      </label>
      <br />
      <input
        id="wd-your-graduation-year"
        type="number"
        min="2025"
        max="2030"
        defaultValue="2026"
      />
      <br />

<label htmlFor="wd-your-program-start-date">Program Start Date:</label>
<br />
<input
  id="wd-your-program-start-date"
  type="date"
  defaultValue="2025-01-01"
/>
      <br />

      <label htmlFor="wd-your-excitement">
        Excitement for Web Development (0-10):
      </label>
      <br />
      <input
        id="wd-your-excitement"
        type="range"
        min="0"
        max="10"
        defaultValue="10"
      />

      <h5>Actions</h5>

      <button id="wd-your-save" type="submit">
        Save
      </button>

      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}