
"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

type Assignment = {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
  score: number;
};

export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState<Assignment>({
    id: 0,
    title: "",
    description: "",
    due: "",
    completed: false,
    score: 0,
  });

  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };

  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title));
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div id="wd-working-with-remote-objects-async">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <input
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <input
        type="date"
        value={assignment.due}
        onChange={(e) =>
          setAssignment({ ...assignment, due: e.target.value })
        }
      />
      <label>
        <input
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        Completed
      </label>
      <button type="button" onClick={updateTitle}>
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
    </div>
  );
}
