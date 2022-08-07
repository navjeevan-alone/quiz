import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Welcome() {
	return (
		<Card style={{ width: "18rem", margin: "1rem auto" }}>
			<Card.Img variant='top' src='img/welcome.png' />
			<Card.Body>
				<Card.Title style={{ fontSize: "2rem" }}>Qzee</Card.Title>
				<Card.Text>Click the button to start the quiz</Card.Text>

				<Button variant='primary'>Start Quiz</Button>
			</Card.Body>
		</Card>
	);
}

export default Welcome;
