import { useEffect } from "react";
import { Search } from "lucide-react";

function SearchFilter({
  searchQuery,
  setSearchQuery,
  currentFilter,
  setCurrentFilter,
  currentSort,
  setCurrentSort,
  counts,
}) {
  useEffect(() => {
    const timeout = setTimeout(() => {}, 300);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <section className="mb-6">
      <div className="relative mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search todos..."
          className="w-full p-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        />
        <Search className="absolute left-3 top-3.5 text-gray-400 dark:text-gray-500" />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentFilter("all")}
            className={`px-4 py-2 rounded-lg font-medium ${
              currentFilter === "all"
                ? "bg-blue-600 text-white dark:bg-blue-700"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            All ({counts.all})
          </button>
          <button
            onClick={() => setCurrentFilter("active")}
            className={`px-4 py-2 rounded-lg font-medium ${
              currentFilter === "active"
                ? "bg-blue-600 text-white dark:bg-blue-700"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Active ({counts.active})
          </button>
          <button
            onClick={() => setCurrentFilter("completed")}
            className={`px-4 py-2 rounded-lg font-medium ${
              currentFilter === "completed"
                ? "bg-blue-600 text-white dark:bg-blue-700"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Completed ({counts.completed})
          </button>
        </div>
        <select
          value={currentSort}
          onChange={(e) => setCurrentSort(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </section>
  );
}

export default SearchFilter;