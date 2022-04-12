// -- Всегда должны импортировать React
import React from "react";

// -- Стили
const styles = {
	ul: {
		// -- В параметрах стилей дефис убирается, а следующее слово пишется с большой буквы
		listStyle: "none",
		margin: 0,
		padding: 0,
	},
};
// -- props - это обект, у которого есть ключ todos
export default function Todolist(props) {
	return (
		<ul style={styles.ul}>
			{/* -- Фигурные скобки говорят React, что будем работать с JavaScript */}

			{props.Todos.map((todo) => {
				return <li>{todo.title}</li>;
			})}
		</ul>
	);
}
