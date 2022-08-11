import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
function Result() {
	return (
		<Container>
			<Card
				style={{ width: "18rem", margin: "1rem auto", textAlign: "center" }}>
				<Card.Img variant='top' src='img/result.jpg' />
				<Card.Body>
					<Card.Title style={{ fontSize: "2rem" }}>Result</Card.Title>

					<h1 className='mb-3'>4/5</h1>
					<Button variant='primary'>Restart</Button>
					<br />
					<Button variant='link'>
						<i className='material-icons'>home</i>
					</Button>
				</Card.Body>
			</Card>
			<div className='d-flex justify-content-center text-center flex-column align-items-center my-3'>
				<h2></h2>
				<p></p>
			</div>
		</Container>
	);
}

export default Result;
