//! -- index.js - ГЛАВНЫЙ ФАЙЛ

// -- Импорт React фреймворка
import React from "react";
// -- Импорт ReactDOM - он обновляет DOM.
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// -- JSX — расширение языка JavaScript. Мы рекомендуем использовать его, когда требуется объяснить React, как должен выглядеть UI
// const element = <Welcome name="Алиса" object={obj} />;

// -- ReactDOM.render() - для рендеринга React-элемента (в данном случае App) в корневой узел DOM (в файле index.html в div id="root")
ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
