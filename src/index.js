import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Theme.css";
import "./css//App.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import StateProvider from "./contexts/StateProvider";
import stateReducer, { initialState } from "./reducers/stateReducer";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<StateProvider initialState={initialState} stateReducer={stateReducer}>
				<App />
			</StateProvider>
		</Router>
	</React.StrictMode>
);

// reportWebVitals();
