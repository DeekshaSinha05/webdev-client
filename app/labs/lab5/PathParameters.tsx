
"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div id="wd-path-parameters">
      <h4>Path Parameters</h4>
      <input
        className="rounded border p-2"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="rounded border p-2"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <div className="flex flex-col gap-2 mt-2">
        <a id="wd-path-parameter-add"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
          Add {a} + {b}
        </a>
        <a id="wd-path-parameter-subtract"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
          Subtract {a} - {b}
        </a>
        <a id="wd-path-parameter-multiply"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
          Multiply {a} × {b}
        </a>
        <a id="wd-path-parameter-divide"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
          Divide {a} ÷ {b}
        </a>
      </div>
    </div>
  );
}
