
"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div id="wd-query-parameters">
      <h4>Query Parameters</h4>
      <input className="rounded border p-2" value={a}
        onChange={(e) => setA(e.target.value)} />
      <input className="rounded border p-2" value={b}
        onChange={(e) => setB(e.target.value)} />
      <div className="flex flex-col gap-2 mt-2">
        <a id="wd-query-parameter-add"
          href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
          Add {a} + {b}
        </a>
        <a id="wd-query-parameter-subtract"
          href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
          Subtract {a} - {b}
        </a>
        <a id="wd-query-parameter-multiply"
          href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
          Multiply {a} × {b}
        </a>
        <a id="wd-query-parameter-divide"
          href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
          Divide {a} ÷ {b}
        </a>
      </div>
    </div>
  );
}
