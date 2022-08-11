import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
function Timer() {
	const timelimit = 60;
	const [startMinutes, setStartMinutes] = useState(timelimit);

	const [remainingTime, setRemainingTime] = useState(startMinutes);
	const [isRunning, setIsRunning] = useState(false);
	const [hour, setHour] = useState(Math.floor(startMinutes % 60));
	const [minute, setMinute] = useState(Math.floor(startMinutes % 60));
	const [second, setSecond] = useState(0);
	//
	const [time, setTime] = useState(startMinutes * 60);
	const countdown = () => {
		if (isRunning) {
			setTime(time - 1);
			setSecond(time % 60);

			if (second === 0) {
				setMinute(minute - 1);
				setSecond(59);
			}
			if (minute === 0) {
				hour !== 0 && setHour(hour - 1);
				// && setMinute(59);
			}
		}
	};

	useEffect(() => {
		const timer = setInterval(countdown, 1000);
		if (minute === 0 && hour === 0 && second === 0) {
			clearInterval(timer);
			alert("Time out");
		}
		return () => clearInterval(timer);
	});
	useEffect(() => {
		setIsRunning(!isRunning);
		setHour(Math.floor(startMinutes / 60));
		setMinute(Math.floor(startMinutes % 60));
		setSecond(0);
		setRemainingTime(startMinutes);
		setIsRunning(isRunning);
	}, [startMinutes]);
	return (
		<Container className='d-flex justify-content-between'>
			<h2 className='timer p-1 my-1'>
				<span className='time'>{hour < 10 ? `0${hour}` : hour}</span>:
				<span className='time'>{minute < 10 ? `0${minute}` : minute}</span>:
				<span className='time'>{second < 10 ? `0${second}` : second}</span>
			</h2>

			<button
				type='button'
				onClick={() => {
					setStartMinutes(timelimit);
				}}>
				reset
			</button>
			<button
				type='button'
				onClick={() => {
					setIsRunning(!isRunning);
				}}>
				{isRunning ? "pause" : "play"}
			</button>
		</Container>
	);
}

export default Timer;
