//! -- Правило 1: Всегда нужно импортировать React
import React from "react";
// -- Импорт PropTypes
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

// -- Выносим стили в отдельный элемент
const styleUL = {
	// -- Название тега, для которого будем применять стили. Тег обявляется в виде объекта. Свойства пишется в виде camel-case. Параметры свойств пишутся в кавычках
	ul: {
		listStyle: "none",
	},
};

//! -- Правило 2: Всегда нужно что-то экспортировать наружу
function TodoList(props) {
	return (
		<ul style={styleUL.ul}>
			{/* -- todos необходимо валидировать */}
			{props.todos.map((item, index) => {
				return (
					<TodoItem
						todo={item}
						key={item.id}
						index={index}
						onChange={props.onToggle}
					></TodoItem>
				);
			})}
		</ul>
	);
}

// -- Валидация
// -- PropTypes предоставляет ряд валидаторов, которые могут использоваться для проверки, что получаемые данные корректны
TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
