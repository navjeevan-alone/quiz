import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Question from "./Question";
import Navigator from "./Navigator";
function Main() {
	const [toggleShow, setToggleShow] = useState(true);
	return (
		<Container className='my-3 p-2 gap-2 border border-dark rounded-2 d-flex '>
			<Navigator isShow={toggleShow}></Navigator>
			<Button
				style={{ height: "3rem" }}
				variant='dark'
				size='sm'
				className='align-self-center p-0'
				onClick={() => {
					setToggleShow(!toggleShow);
				}}>
				<i className='material-symbols-rounded' style={{ lineHeight: "3rem" }}>
					{toggleShow ? "chevron_left" : "chevron_right"}
				</i>
			</Button>

			<Question />
		</Container>
	);
}

export default Main;
