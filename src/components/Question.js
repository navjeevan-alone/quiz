import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Question() {
	let arr = ["option 1", "option 2", "option 3", "option 4"];
	return (
		<div className='question p-4 '>
			<h2>This will be question</h2>
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
			<div className='button-group mt-3 d-flex justify-content-between'>
				<Button variant='dark' className='rounded-pill'>
					<i className='material-symbols-rounded'>west</i>
				</Button>
				<Button variant='dark' className='rounded-pill'>
					<i className='material-symbols-rounded'>star</i>
				</Button>

				<Button variant='primary' className='rounded-pill'>
					<i className='material-symbols-rounded'>east</i>
				</Button>
			</div>
		</div>
	);
}

export default Question;
