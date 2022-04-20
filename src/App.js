import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import { Loader } from "./Loader";

// -- Загрузка компонента отдельно
const AddTodo = React.lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(import("./Todo/AddTodo"));
			}, 3000);
		})
);

// -- Это React-компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент
function App() {
	// -- Хуки нужны, чтобы наделить функциональный компонент внутренним состоянием
	// -- Изменение состояния вызовет повторный рендеринг компонента
	// -- В useState() передаем изначальное состояние данного стэйта
	// -- useState() всегда возвращает массив из двух элементов:
	// -- Первый элемент - само состояние (по умолчанию оно равно начальному состоянию)
	// -- Второй элемент - функция, изменяющая состояние таким образом, чтобы React видел это измененние
	const [todos, setTodos] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	// -- Используем хук useEffect для запроса на сервер
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
			.then((response) => response.json())
			.then((todos) =>
				setTimeout(() => {
					setTodos(todos);
					setLoading(false);
				}, 2000)
			);
	}, []);

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

	function addTodo(title) {
		setTodos(
			todos.concat([
				{
					title: title,
					id: Date.now(),
					completed: false,
				},
			])
		);
	}

	return (
		// -- С помощью Context мы можем передавать функции
		// -- Если в объекте ключ и значение совпадают, то можно записать так - removeTodo
		<Context.Provider value={{ removeTodo: removeTodo }}>
			<div className="wrapper">
				<h1>React Tutorial</h1>
				<React.Suspense fallback={<p>Loading...</p>}>
					<AddTodo onCreate={addTodo} />
				</React.Suspense>
				{loading && <Loader />}
				{todos.length ? (
					<TodoList todos={todos} onToggle={toggleTodo} />
				) : loading ? null : (
					<p>No todos!</p>
				)}
			</div>
		</Context.Provider>
	);
}

export default App;
