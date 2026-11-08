
import {
  createContext,
  createElement,
  useContext,
  useState,
  type ReactNode,
} from "react";

type Todo = {
  id: string;
  title: string;
};

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn HTML" },
    { id: "2", title: "Learn CSS" },
    { id: "3", title: "Learn JavaScript" },
  ]);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title },
    ]);
  };

  const updateTodo = (id: string, title: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return createElement(
    TodosContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children
  );
}

export function useTodosContext() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }

  return context;
}
