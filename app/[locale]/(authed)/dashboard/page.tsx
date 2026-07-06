"use client";

import { get } from "@/lib/api";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
};

export default function Dashboard() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    get("/todos").then(setTodos);
  }, []);

  return (
    <div>
      <p>Dashboard</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
