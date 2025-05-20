import { useState } from "react";
import { CheckCircle, Circle, Calendar, Pencil, Trash2 } from "lucide-react";
import ConfirmModal from "./ConfirmModal";

// Component to display a single todo item
function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editForm, setEditForm] = useState({
    title: todo.title,
    description: todo.description || "",
    dueDate: todo.dueDate || "",
  });

  // Handle input changes in edit form
  const handleInputChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // Save edited todo
  const saveEdit = () => {
    if (!editForm.title.trim()) return;
    editTodo(todo.id, editForm);
    setIsEditing(false);
  };

  // Handle delete confirmation
  const handleDelete = () => {
    deleteTodo(todo.id);
    setShowModal(false);
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get priority border class
  const getPriorityBorder = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-red-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-transparent";
    }
  };

  return (
    <>
      <div
        className={`todo-item bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-3 border-l-4 ${getPriorityBorder(
          todo.priority
        )}`}
      >
        {isEditing ? (
          // Edit mode
          <div className="edit-form">
            <div className="mb-3">
              <input
                type="text"
                name="title"
                value={editForm.title}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="description"
                value={editForm.description}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="mb-3">
              <input
                type="date"
                name="dueDate"
                value={editForm.dueDate}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="flex space-x-2">
              <button
                onClick={saveEdit}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          // Display mode
          <div className="flex items-start justify-between">
            <div className="flex items-start flex-1">
              <button
                onClick={() => toggleComplete(todo.id)}
                className="mr-3 mt-1 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {todo.completed ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <Circle className="text-gray-400 dark:text-gray-500" />
                )}
              </button>
              <div className="flex-1">
                <h3
                  className={`text-lg font-medium ${
                    todo.completed
                      ? "line-through text-gray-400 dark:text-gray-500"
                      : "text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {todo.title}
                </h3>
                {todo.description && (
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {todo.description}
                  </p>
                )}
                {todo.dueDate && (
                  <p
                    className={`text-sm ${
                      todo.completed
                        ? "text-gray-400 dark:text-gray-500"
                        : "text-gray-600 dark:text-gray-400"
                    } mt-2`}
                  >
                    <Calendar className="inline mr-1" size={16} /> Due: {formatDate(todo.dueDate)}
                  </p>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
      {showModal && (
        <ConfirmModal
          title="Confirm Delete"
          message={`Are you sure you want to delete "${todo.title}"?`}
          onConfirm={handleDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default TodoItem;