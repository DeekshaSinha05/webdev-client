
"use client";
import { useState } from "react";

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = async (selectedOperation = operation) => {
    const response = await fetch(
      `/api/lab5/calculator?a=${a}&b=${b}&operation=${selectedOperation}`
    );
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      setResult("");
      return;
    }

    const symbols: Record<string, string> = {
      add: "+",
      subtract: "-",
      multiply: "×",
      divide: "÷",
    };

    setResult(`${data.a} ${symbols[selectedOperation]} ${data.b} = ${data.result}`);
    setError("");
  };

  return (
    <div id="wd-calculator-next-web-api">
      <h3>Calculator (Next.js Web API)</h3>

      <label htmlFor="wd-calculator-a">A:</label>
      <input
        id="wd-calculator-a"
        className="rounded border p-2"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <label htmlFor="wd-calculator-b">B:</label>
      <input
        id="wd-calculator-b"
        className="rounded border p-2"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <label htmlFor="wd-calculator-operation">Operation:</label>
      <select
        id="wd-calculator-operation"
        className="rounded border p-2"
        value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>

      <button
        id="wd-calculator-calculate"
        className="rounded bg-blue-600 px-3 py-2 text-white"
        onClick={() => calculate()}
      >
        Calculate
      </button>

      <input
        id="wd-calculator-result"
        className="rounded border p-2"
        value={error || result}
        readOnly
      />
    </div>
  );
}
