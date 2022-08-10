import React from "react";

import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";

function Navigator({ isShow }) {
	return (
		isShow && (
			<Accordion defaultActiveKey='0'>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>Section 1</Accordion.Header>
					<Accordion.Body>
						<Badge className='ques-badge' bg='dark'>
							1
						</Badge>
						<Badge className='ques-badge' bg='warning'>
							2
						</Badge>
						<Badge className='ques-badge' bg='success'>
							3
						</Badge>
						<Badge className='ques-badge' bg='danger'>
							4
						</Badge>
					</Accordion.Body>
				</Accordion.Item>
				{/* <Accordion.Item eventKey='1'>
					<Accordion.Header>Accordion Item #2</Accordion.Header>
					<Accordion.Body></Accordion.Body>
				</Accordion.Item> */}
			</Accordion>
		)
	);
}

export default Navigator;
