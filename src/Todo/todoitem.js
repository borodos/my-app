import React from "react";
import PropTypes from "prop-types";
import Context from "../context";

function TodoItem({ todo, index, onChange }) {
	// -- Используем хук useContext, чтобы взять функцию removeTodo
	// -- На выходе useContext получаем тот объект, который передали
	const { removeTodo } = React.useContext(Context);
	const classes = [];
	if (todo.completed) {
		classes.push("done");
	}

	return (
		<li className="todo-item">
			<span className={classes.join(" ")}>
				<input
					className="input-checkbox"
					type="checkbox"
					checked={todo.completed}
					// В события нужно передавать callback функции
					onChange={() => onChange(todo.id)}
				/>
				<strong>{index + 1}</strong>
				&nbsp; {/* -- Символ пробела */}
				{todo.title}
			</span>
			<button
				className="rm"
				onClick={() => {
					removeTodo(todo.id);
				}}
			>
				&times;
			</button>
		</li>
	);
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
};

export default TodoItem;
