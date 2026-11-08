
import { useState } from "react";

export default function useToggle(initial = false) {
  const [on, setOn] = useState(initial);

  const toggle = () => {
    setOn((previous) => !previous);
  };

  return [on, toggle] as const;
}
