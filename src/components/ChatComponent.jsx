import React, { useState } from "react";
import { fetchStreamingResponse } from "../utils/fetchStreamingResponse";

function ChatComponent() {
	const [input, setInput] = useState("");
	const [response, setResponse] = useState("");

	const handleSubmit = async () => {
		const stream = await fetchStreamingResponse(input);
		const reader = stream.getReader();
		let result = "";

		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			result += new TextDecoder("utf-8").decode(value);
		}

		setResponse(result);
	};

	return (
		<div className="p-4">
			<textarea
				value={input}
				onChange={(e) => setInput(e.target.value)}
				className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite"
				placeholder="Type your message here..."
				rows="4"
			/>
			<button
				onClick={handleSubmit}
				className="mt-4 p-2 bg-primary text-offwhite rounded hover:bg-primary-dark transition-colors">
				Submit
			</button>
			<div className="mt-4 p-2 rounded bg-bluegray-800 text-offwhite">
				{response}
			</div>
		</div>
	);
}

export default ChatComponent;
