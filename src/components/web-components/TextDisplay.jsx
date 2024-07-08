import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "./Slider";
import { fetchTTSAudio } from "../../utils/TTS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faStop,
	faSync,
} from "@fortawesome/free-solid-svg-icons";

const TextDisplay = ({ userInput, aiResponse, onSubmit }) => {
	const [displayText, setDisplayText] = useState(userInput + aiResponse);
	const inputRef = useRef(null);
	const typingTimeoutRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(100); // Default to 100%
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
		}, 3000); // Adjust the delay as needed
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
			audioElement.volume = volume / 100; // Set initial volume
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

	const handleVolumeChange = (e) => {
		const value = Number(e.target.value); // Ensure the value is a number
		setVolume(value);
		if (audioRef.current) {
			audioRef.current.volume = value / 100; // Adjust volume
		}
	};

	const incrementVolume = () => {
		setVolume((prevVolume) => Math.min(prevVolume + 10, 100));
	};

	const decrementVolume = () => {
		setVolume((prevVolume) => Math.max(prevVolume - 10, 0));
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
			<div className="mt-4 flex flex-col items-center">
				<div className="flex items-center mb-4">
					<button onClick={startPlayback} className="icon-button">
						<FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
					</button>
					<button onClick={stopPlayback} className="icon-button ml-2">
						<FontAwesomeIcon icon={faStop} />
					</button>
					<button onClick={stopPlayback} className="icon-button ml-2">
						<FontAwesomeIcon icon={faSync} />
					</button>
				</div>
				<div className="flex items-center mb-2">
					<span>{volume}%</span>
				</div>
				<div className="flex items-center">
					<button onClick={decrementVolume} className="icon-button">
						-
					</button>
					<Slider value={volume} onChange={handleVolumeChange} />
					<button onClick={incrementVolume} className="icon-button ml-2">
						+
					</button>
				</div>
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
