
"use client";

import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div id="wd-context-todo-list">
      <h3>React Context Todo List</h3>
      <input
        id="wd-context-todo-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="rounded border border-neutral-300 px-3 py-1.5"
      />
      <button
        type="button"
        id="wd-context-add-todo-click"
        onClick={() => {
          if (title.trim()) {
            addTodo(title);
            setTitle("");
            setEditingId(null);
          }
        }}
      >
        Add
      </button>
      {editingId !== null && (
        <button
          type="button"
          id="wd-context-update-todo-click"
          onClick={() => {
            if (title.trim()) {
              updateTodo(editingId, title);
              setTitle("");
              setEditingId(null);
            }
          }}
        >
          Update
        </button>
      )}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button
              type="button"
              onClick={() => {
                setEditingId(todo.id);
                setTitle(todo.title);
              }}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
