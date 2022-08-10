import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Theme.css";
import "./css//App.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>
);

// reportWebVitals();
