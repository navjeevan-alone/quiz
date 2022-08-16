export const initialState = {
	ques: "Loaded Question",
	options: "",
	isQuiz: false,
	isSubmitted: false,
};

export default function stateReducer(state, action) {
	switch (action.type) {
		case "loadQues":
			return state;
		case "startQuiz":
			return { ...state, isQuiz: true };
		case "endQuiz":
			return { ...state, isQuiz: false, isSubmitted: true };
		case "run":
			console.log(state);
			return state;
		default:
			return state;
	}
}
