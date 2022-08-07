import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Welcome />} />
			</Routes>
		</div>
	);
}

export default App;
