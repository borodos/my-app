import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";

// -- Это React-компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент
function App() {
	// -- Хуки нужны, чтобы наделить функциональный компонент внутренним состоянием
	// -- Изменение состояния вызовет повторный рендеринг компонента
	// -- В useState() передаем изначальное состояние данного стэйта
	// -- useState() всегда возвращает массив из двух элементов:
	// -- Первый элемент - само состояние (по умолчанию оно равно начальному состоянию)
	// -- Второй элемент - функция, изменяющая состояние таким образом, чтобы React видел это измененние
	const [todos, setTodos] = React.useState([
		{ id: 1, completed: false, title: "Купить хлеб" },
		{ id: 2, completed: false, title: "Купить масло" },
		{ id: 3, completed: false, title: "Купить сахар" },
	]);

	const a = React.useState([
		{ id: 1, completed: false, title: "Купить хлеб" },
		{ id: 2, completed: false, title: "Купить масло" },
		{ id: 3, completed: false, title: "Купить сахар" },
	]);
	console.log(a);
	// -- Чтобы отобразить этот массив в элементе Todolist, в Todolist нужно отобразить, какие свойства мы будем принимать
	// Для этого можно придумать название свойства, которого будем принимать, например todos, далее в качестве значения этого свойства в фигурных скобках указываем JS-элемент
	// Строка 17

	function toggleTodo(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	}

	function removeTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	return (
		// -- С помощью Context мы можем передавать функции
		// -- Если в объекте ключ и значение совпадают, то можно записать так - removeTodo
		<Context.Provider value={{ removeTodo: removeTodo }}>
			<div className="wrapper">
				<h1>React Tutorial</h1>
				<TodoList todos={todos} onToggle={toggleTodo} />
			</div>
		</Context.Provider>
	);
}

export default App;
