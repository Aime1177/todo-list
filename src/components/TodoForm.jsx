import { useState } from "react";

// Component for adding new todos
function TodoForm({ addTodo, onCancel }) {
  // Form state
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "none",
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!form.title.trim()) return;
    addTodo({ ...form, completed: false });
    setForm({ title: "", description: "", dueDate: "", priority: "none" });
  };

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      {/* Title input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Title*
        </label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="What needs to be done?"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
          required
        />
      </div>
      {/* Description textarea */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description (optional)
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Add more details..."
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        />
      </div>
      {/* Due date input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Due Date (optional)
        </label>
        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        />
      </div>
      {/* Priority select */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Priority
        </label>
        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        >
          <option value="none">None</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onCancel}
          className="max-w-[40%] w-full sm:w-auto sm:max-w-none bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-bold py-3 px-4 rounded-lg transition duration-200"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="max-w-[40%] w-full sm:w-auto sm:max-w-none bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
        >
          Add Todo
        </button>
      </div>
    </section>
  );
}

export default TodoForm;