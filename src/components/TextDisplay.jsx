import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function TextDisplay({ userInput, aiResponse, onSubmit }) {
	const [displayText, setDisplayText] = useState(userInput + aiResponse);
	const inputRef = useRef(null);
	const typingTimeoutRef = useRef(null);

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
		}, 2000); // Adjust the delay as needed
	};

	return (
		<div className="flex flex-col h-full">
			<div className="flex-grow p-4 bg-bluegray-800 text-offwhite rounded shadow-md overflow-auto">
				<div className="text-content w-full h-full p-4 bg-bluegray-900 text-offwhite rounded mb-4">
					<pre className="whitespace-pre-wrap">{displayText}</pre>
					<div
						ref={inputRef}
						contentEditable
						className="w-full mt-2 p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite"
						onInput={handleInput}
						placeholder="Type your input here..."></div>
				</div>
			</div>
		</div>
	);
}

TextDisplay.propTypes = {
	userInput: PropTypes.string.isRequired,
	aiResponse: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default TextDisplay;
