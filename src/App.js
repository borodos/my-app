import React from "react";
import Todolist from "./Todo/todolist";

// -- Это React-компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент
function App() {
	// -- Чтобы отобразить этот массив в элементе Todolist, в Todolist нужно отобразить, какие свойства мы будем принимать
	// Для этого можно придумать название свойства, которого будем принимать, например todos, далее в качестве значения этого свойства в фигурных скобках указываем JS-элемент
	// Строка 17
	let todo = [
		{ id: 1, completed: false, title: "Купить хлеб" },
		{ id: 2, completed: false, title: "Купить масло" },
		{ id: 3, completed: false, title: "Купить сахар" },
	];

	const todo_2 = [
		{ id: 1, completed: false, title: "Купить хлеб1" },
		{ id: 2, completed: false, title: "Купить масло1" },
		{ id: 3, completed: false, title: "Купить сахар1" },
	];

	function toggleTodo(id) {
		todo = todo.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
	}

	return (
		<div className="wrapper">
			<h1>React Tutorial</h1>
			<Todolist todos={todo} todos_2={todo_2} onToggle={toggleTodo} />
		</div>
	);
}

export default App;
