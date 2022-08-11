import React from "react";
import Button from "react-bootstrap/Button";
function NavigateButtons() {
	return (
		<>
			<hr />
			<div className='button-group mt-3 d-flex justify-content-between'>
				<Button variant='dark' className='rounded-pill'>
					<i className='material-symbols-rounded'>west</i>
				</Button>
				<Button variant='dark' className='rounded-pill'>
					<i className='material-symbols-rounded'>bookmark</i>
					{/* <span class='material-symbols-sharp'>bookmark_added</span> */}
				</Button>

				<Button variant='primary' className='rounded-pill'>
					<i className='material-symbols-rounded'>east</i>
				</Button>
			</div>
		</>
	);
}

export default NavigateButtons;
