# Todo App

A modern, responsive todo list application built with React, Vite, Tailwind CSS v4, and Lucide React icons. The app allows users to manage tasks with features like adding, editing, deleting, searching, filtering, and sorting todos, along with a dark mode toggle and a confirmation modal for deletions.

## Live Demo

Check out the live demo: [flavien-todolist.netlify.app](https://flavien-todolist.netlify.app)

## Features

- **Add Todos**: Create new tasks with title, description, due date, and priority.
- **Edit Todos**: Update existing tasks inline.
- **Delete Todos**: Remove tasks with a confirmation modal to prevent accidental deletions.
- **Search**: Filter todos by title or description.
- **Filter**: View all, active, or completed todos.
- **Sort**: Order todos by newest or oldest first.
- **Dark Mode**: Toggle between light and dark themes, with preferences saved in localStorage.
- **Responsive Design**: Optimized for mobile and desktop, with buttons taking ~40% of the screen width on mobile.
- **Persistent Storage**: Todos and theme preferences are saved in localStorage.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast frontend build tool for development and production.
- **Tailwind CSS v4**: Utility-first CSS framework for styling, with dark mode support.
- **Lucide React**: Icon library for consistent, modern icons.
- **LocalStorage**: For persisting todos and theme settings.

## Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── ConfirmModal.jsx
│   │   ├── Header.jsx
│   │   ├── SearchFilter.jsx
│   │   ├── TodoList.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoForm.jsx
│   ├── utils/
│   │   └── Storage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── README.md
```

## Setup Instructions

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js**: Version 16 or higher.
- **npm**: Included with Node.js, or use Yarn if preferred.

### Installation

**Clone the Repository (or create a new project directory):**

```bash
git clone https://github.com/Aime1177/todo-list
cd todo-app
```

**Alternatively, create a new Vite project:**

```bash
npm create vite@latest todo-app -- --template react
cd todo-app
```

**Install Dependencies:**

```bash
npm install
npm install tailwindcss @tailwindcss/vite lucide-react
```

**Set Up Files:**

- Copy the provided files into the project directory, following the structure above.
- Ensure `index.html`, `tailwind.config.js`, `vite.config.js`, and `package.json` are in the root.
- Place `App.jsx`, `main.jsx`, `styles.css`, and the `components/` and `utils/` folders in `src/`.

**Run the Development Server:**

```bash
npm run dev
```

- Open `http://localhost:5173` in your browser (port may vary).

**Build for Production (optional):**

```bash
npm run build
npm run preview
```

## Usage

- **Add a Todo**: Click "Add Todo" to open the form, fill in details, and click "Add Todo".
- **Edit a Todo**: Click the pencil icon, update fields, and click "Save".
- **Delete a Todo**: Click the trash icon, confirm in the modal, and click "Delete".
- **Search and Filter**: Use the search bar and filter buttons to find specific todos.
- **Sort**: Select "Newest First" or "Oldest First" from the dropdown.
- **Toggle Dark Mode**: Click the moon/sun icon in the header to switch themes.

## Troubleshooting

- **Dark Mode Not Working**: Ensure `styles.css` includes `@custom-variant dark`, and check the browser console for errors.
- **Buttons Not Responsive**: Verify `TodoForm.jsx` uses `max-w-[40%] w-full sm:w-auto` for buttons.
- **Dependencies Issues**: Run `npm install` again or clear `node_modules` and `package-lock.json` with:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Contributing

Feel free to submit issues or pull requests to improve the app. Suggestions for new features (e.g., bulk delete, categories) are welcome!

## License

This project is open-source and available under the MIT License.

**Repository:** [https://github.com/Aime1177/todo-list](https://github.com/Aime1177/todo-list)
