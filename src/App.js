import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import Result from "./components/Result";
import Timer2 from "./components/Timer";
import Timer from "./components/Timer";

function App() {
	return (
		<div className='App'>
			<Header />
			{/* <Timer /> */}
			{/* <Timer2 /> */}
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/quiz' element={<Main />} />
				<Route path='/result' element={<Result />} />
			</Routes>
		</div>
	);
}

export default App;
