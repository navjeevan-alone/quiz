import React, { createContext, useContext, useReducer } from "react";
import stateReducer, { initialState } from "../reducers/stateReducer";
export const StateContext = createContext();
export function useStateContext() {
	return useContext(StateContext);
}

// function StateProvider({ children }) {
// 	const [state, dispatch] = useReducer(stateReducer, initialState);
// 	dispatch({ action: { type: "run" } });

// 	const value = { dummyProduct: null }; //we can send anything we want later in this object
// 	//we are sending dummyProdcut only because we dont want to send empty object
// 	return (
// 		<StateContext.Provider value={{ value, state, dispatch }}>
// 			{children}
// 		</StateContext.Provider>
// 	);
// }
export const StateProvider = ({ stateReducer, initialState, children }) => {
	return (
		<StateContext.Provider value={useReducer(stateReducer, initialState)}>
			{children}
		</StateContext.Provider>
	);
};
export default StateProvider;
