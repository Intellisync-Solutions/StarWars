import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "./Slider";
import { fetchTTSAudio } from "../../utils/TTS";

const TextDisplay = ({ userInput, aiResponse, onSubmit }) => {
	const [displayText, setDisplayText] = useState(userInput + aiResponse);
	const inputRef = useRef(null);
	const typingTimeoutRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [sliderValue, setSliderValue] = useState(100); // Default to 100%
	const audioRef = useRef(null);

	useEffect(() => {
		setDisplayText(userInput + aiResponse);
	}, [userInput, aiResponse]);

	const handleInput = () => {
		const text = inputRef.current.innerText;

		if (typingTimeoutRef.current) {
			clearTimeout(typingTimeoutRef.current);
		}

		typingTimeoutRef.current = setTimeout(() => {
			if (text.trim() !== "") {
				onSubmit(text);
				inputRef.current.innerText = ""; // Clear the input div
			}
		}, 1000); // Adjust the delay as needed
	};

	const startPlayback = async () => {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
		}

		try {
			const audioSrc = await fetchTTSAudio(displayText);
			const audioElement = new Audio(audioSrc);
			audioRef.current = audioElement;

			audioElement.play();
			setIsPlaying(true);

			audioElement.onended = () => {
				setIsPlaying(false);
			};
		} catch (error) {
			console.error("Error fetching TTS audio:", error);
		}
	};

	const pausePlayback = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const stopPlayback = () => {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
			setIsPlaying(false);
		}
	};

	const handleSliderChange = (e) => {
		const value = Number(e.target.value); // Ensure the value is a number
		setSliderValue(value);
		if (audioRef.current) {
			audioRef.current.playbackRate = value / 100; // Adjust playback rate
		}
	};

	return (
		<div className="flex flex-col h-full text-display">
			<div className="text-content">
				<pre className="whitespace-pre-wrap">{displayText}</pre>
				<div
					ref={inputRef}
					contentEditable
					className="editable-div"
					onInput={handleInput}
					placeholder="Your Destiny Starts Here..."></div>
			</div>
			<div className="mt-4 flex items-center">
				<button onClick={startPlayback} className="star-wars-button">
					Start
				</button>
				<button onClick={pausePlayback} className="star-wars-button ml-2">
					{isPlaying ? "Pause" : "Resume"}
				</button>
				<button onClick={stopPlayback} className="star-wars-button ml-2">
					Stop
				</button>
				<Slider
					value={sliderValue}
					onChange={handleSliderChange}
					min={50}
					max={200}
					step={1}
				/>
			</div>
		</div>
	);
};

TextDisplay.propTypes = {
	userInput: PropTypes.string.isRequired,
	aiResponse: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default TextDisplay;
