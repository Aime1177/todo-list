import { X } from "lucide-react";

// Modal component for confirmation dialogs
function ConfirmModal({ title, message, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content bg-white dark:bg-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {message}
        </p>
        <div className="flex space-x-2">
          <button
            onClick={onConfirm}
            className="flex-1 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Delete
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;