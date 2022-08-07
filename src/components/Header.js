import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

function Header() {
	return (
		<Navbar bg='dark' expand='lg' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>Qzee</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#link'>Link</Nav.Link>
						{/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Separated link
							</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
					<Button variant='primary'>Start Quiz</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
