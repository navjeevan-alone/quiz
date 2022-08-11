export const initialState = {
	ques: "Loaded Question",
	options: "",
	isQuiz: false,
	isSubmitted: false,
};
export const stateReducer = (action, state) => {
	switch (action.type) {
		case "loadQues":
			return state;
		case "startQuiz":
			return { ...state, isQuiz: true };
		case "endQuiz":
			return { ...state, isQuiz: false, isSubmitted: true };
	}
};
