import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  // Load từ localStorage khi mở app
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // Lưu vào localStorage khi todos thay đổi
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Thêm Todo
  const addTodo = () => {
    if (newTask.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  };

  // Đánh dấu hoàn thành
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Xóa Todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Bắt đầu update
  const startEdit = (id: number, text: string) => {
    setEditId(id);
    setEditValue(text);
  };

  // Lưu update
  const saveUpdate = () => {
    if (editId !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: editValue } : todo
        )
      );
      setEditId(null);
      setEditValue("");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h1 className="text-center mb-4"> Todo List</h1>

      {/* Nhập công việc */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập công việc..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Thêm
        </button>
      </div>

      {/* Danh sách công việc */}
      <ul className="list-group">
        {todos.length === 0 && (
          <li className="list-group-item text-muted text-center">
            Chưa có công việc nào
          </li>
        )}

        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {editId === todo.id ? (
              <div className="d-flex flex-grow-1 gap-2">
                <input
                  type="text"
                  className="form-control"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button className="btn btn-success btn-sm" onClick={saveUpdate}>
                  Lưu
                </button>
              </div>
            ) : (
              <>
                <div className="form-check flex-grow-1">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span
                    className={
                      todo.completed ? "text-decoration-line-through text-muted" : ""
                    }
                  >
                    {todo.text}
                  </span>
                </div>
                <div>
                  <button
                    className="btn btn-outline-primary btn-sm me-2"
                    onClick={() => startEdit(todo.id, todo.text)}
                  >
                    ✏️
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    🗑️
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
