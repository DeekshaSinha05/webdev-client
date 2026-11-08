
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function ReduxTodos() {
  const todos = useSelector(
    (state: RootState) => state.todosReducer.todos
  );
  const [title, setTitle] = useState("Learn Mongo");
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <TodoForm
        title={title}
        setTitle={setTitle}
        editingId={editingId}
        setEditingId={setEditingId}
      />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setTitle={setTitle}
            setEditingId={setEditingId}
          />
        ))}
      </ul>
    </div>
  );
}
