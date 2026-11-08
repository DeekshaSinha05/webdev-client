
import { useTodoStore, type Todo } from "./todoStore";

export default function ZustandTodoItem({
  todo,
}: {
  todo: Todo;
}) {
  const setTodo = useTodoStore((state) => state.setTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleDone = useTodoStore((state) => state.toggleDone);

  return (
    <li
      id={`wd-zustand-todo-${todo.id}`}
      className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
    >
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleDone(todo.id)}
        />
        <span className={todo.done ? "line-through" : undefined}>
          {todo.title}
        </span>
      </label>
      <span className="flex gap-2">
        <button
          type="button"
          className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
          onClick={() => setTodo(todo)}
        >
          Edit
        </button>
        <button
          type="button"
          className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
}
