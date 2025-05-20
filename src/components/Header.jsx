import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

// Header component for title and theme toggle
function Header() {
  // State for current theme
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme === "dark") return "dark";
    if (localStorage.theme === "light") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  // Apply theme and sync with localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="mb-8 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Todo App
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
      >
        {theme === "light" ? <Moon className="text-gray-700" /> : <Sun className="text-yellow-400" />}
      </button>
    </header>
  );
}

export default Header;