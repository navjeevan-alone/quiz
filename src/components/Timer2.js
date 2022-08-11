import React, { useState, useRef, useEffect } from "react";

const Timer2 = () => {
	const timeLimit = 300; // change this to specify time in seconds
	const [isRunning, setIsRunning] = useState(false);
	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState("00:00:00");

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total,
			hours,
			minutes,
			seconds,
		};
	};

	const startTimer = (e) => {
		let { total, hours, minutes, seconds } = getTimeRemaining(e);
		if (total >= 0) {
			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			isRunning &&
				setTimer(
					(hours > 10 ? hours : "0" + hours) +
						":" +
						(minutes > 10 ? minutes : "0" + minutes) +
						":" +
						(seconds > 10 ? seconds : "0" + seconds)
				);
		}
	};

	const clearTimer = (e) => {
		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next
		setTimer("00:00:00");

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec

		if (Ref.current) clearInterval(Ref.current);
	};
	// const getEvent = (param) => {
	//     return param;
	// };
	useEffect(() => {
		// const e = getEvent();
		if (isRunning === true) {
			const id = setInterval((e) => {
				startTimer(e);
			}, 1000);
			Ref.current = id;
		}
	}, [isRunning]);

	const getDeadTime = (deadTime) => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + deadTime);
		return deadline;
	};

	// We can use useEffect so that when the component
	// mount the timer will start as soon as possible

	// We put empty array to act as componentDid
	// mount only
	useEffect(() => {
		clearTimer(getDeadTime(timeLimit));
	}, []);

	// Another way to call the clearTimer() to start
	// the countdown is via action event from the
	// button first we create function to be called
	// by the button
	const onClickReset = () => {
		clearTimer(getDeadTime());
	};

	return (
		<div className='App'>
			<h2>{timer}</h2>
			<button onClick={onClickReset}>Reset</button>
			<button
				onClick={() => {
					setIsRunning(!isRunning);
					// isRunning &&
				}}>
				{isRunning ? "Stop" : "Start"}
			</button>
		</div>
	);
};

export default Timer2;
