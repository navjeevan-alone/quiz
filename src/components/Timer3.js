import Timer from "react-timer";
import ReactDOM from "react-dom";
import React, { Component, PropTypes } from "react";

export default class TestComponent extends Component {
	/* delay is just the delay on showing the update of the timer */
	// const	OPTIONS = ;
	render() {
		return (
			<div>
				{/* <Timer options={OPTIONS} /> */}
				<Timer options={{ prefix: "seconds elapsed!", delay: 100 }} />
			</div>
		);
	}
}
