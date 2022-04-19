import React from "react";
import PropTypes from "prop-types";

const styles = {
	li: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: ".5rem 1rem",
		border: "1px solid #ccc",
		borderRadius: "4px",
		marginBottom: ".5rem",
	},
	input: {
		marginRight: "1rem",
	},
};

function Todoitem({ todo, index, onChange }) {
	console.log("todo: ", todo);
	return (
		<li style={styles.li}>
			<span>
				<input
					style={styles.input}
					type="checkbox"
					// В события нужно передавать callback функции
					onChange={() => onChange(todo.id)}
				/>
				<strong>{index + 1}</strong>
				&nbsp; {/* -- Символ пробела */}
				{todo.title}
			</span>
			<button className="rm">&times;</button>
		</li>
	);
}

Todoitem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
};

export default Todoitem;