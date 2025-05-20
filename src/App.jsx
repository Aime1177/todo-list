import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { loadTodos, saveTodos } from "./utils/Storage";
import { Plus } from "lucide-react";

// Main App component
function App() {
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSort, setCurrentSort] = useState("newest");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([{ ...newTodo, id: Date.now(), createdAt: new Date().toISOString() }, ...todos]);
    setShowForm(false);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      )
    );
  };

  const filteredTodos = todos
    .filter((todo) => {
      const matchesSearch =
        todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (todo.description &&
          todo.description.toLowerCase().includes(searchQuery.toLowerCase()));
      if (currentFilter === "active") return matchesSearch && !todo.completed;
      if (currentFilter === "completed") return matchesSearch && todo.completed;
      return matchesSearch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return currentSort === "newest" ? dateB - dateA : dateA - dateB;
    });

  const counts = {
    all: todos.length,
    active: todos.filter((t) => !t.completed).length,
    completed: todos.filter((t) => t.completed).length,
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Header />
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          currentSort={currentSort}
          setCurrentSort={setCurrentSort}
          counts={counts}
        />
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
        <button
          onClick={() => setShowForm(true)}
          className="w-full mb-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
        >
          <Plus className="mr-2" /> Add Todo
        </button>
        {showForm && (
          <TodoForm
            addTodo={addTodo}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;