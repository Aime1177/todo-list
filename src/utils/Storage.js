export function loadTodos() {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  }
  
  export function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  export function getTheme() {
    return localStorage.getItem("theme") || "light";
  }
  
  export function saveTheme(theme) {
    localStorage.setItem("theme", theme);
  }