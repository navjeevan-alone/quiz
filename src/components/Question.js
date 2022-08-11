import React from "react";
import NavigateButtons from "./NavigateButtons";
import Form from "react-bootstrap/Form";

function Question() {
	let arr = ["option 1", "option 2", "option 3", "option 4"];
	return (
		<div className='question p-4 pb-2 '>
			<h2>
				{" "}
				<span className='ques-num'>Q.1) </span> This will be question
			</h2>
			<hr />
			<Form>
				<div className='opt-group d-flex flex-column gap-2 '>
					{arr.map((option, index) => {
						return (
							<Form.Check
								key={index}
								type='radio'
								id={`radio-${index}`}
								name='opt'
								label={option}
								style={{ fontSize: "1.2rem" }}
							/>
						);
					})}
				</div>
			</Form>
			<NavigateButtons />
		</div>
	);
}

export default Question;
