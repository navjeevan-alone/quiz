import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import Timer from "./components/Timer";

function App() {
	return (
		<div className='App'>
			<Header />
			<Timer />
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/quiz' element={<Main />} />
			</Routes>
		</div>
	);
}

export default App;
