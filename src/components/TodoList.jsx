import TodoItem from "./TodoItem";

function TodoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <section className="mb-8">
      {todos.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center text-gray-500 dark:text-gray-400">
          No todos
        </div>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </section>
  );
}

export default TodoList;