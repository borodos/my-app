// -- Импорт React фреймворка
import React from "react";
// -- Импорт ReactDOM - он обновляет DOM.
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Home } from "../src/components/Home";
import { Order } from "../src/components/Order";
import { About } from "../src/components/About";

// -- JSX — расширение языка JavaScript. Мы рекомендуем использовать его, когда требуется объяснить React, как должен выглядеть UI
// const element = <Welcome name="Алиса" object={obj} />;

// -- Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент.
export const Welcome = () => {
	const navigate = useNavigate();

	return (
		<div className="main-container">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/order">Order</Link>
				</li>
				<li onClick={() => navigate("/birds")}>
					<div
						style={{
							cursor: "pointer",
						}}
					>
						Birds
					</div>
				</li>
			</ul>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/order" element={<Order />} />
				<Route path="/birds" element={<div>BIRDS</div>} />
			</Routes>
			;
		</div>
	);
};

export const App = () => {
	return (
		<BrowserRouter>
			<Welcome />
		</BrowserRouter>
	);
};

// -- ReactDOM.render() - для рендеринга React-элемента (в данном случае App) в корневой узел DOM (в файле index.html в div id="root")
ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
