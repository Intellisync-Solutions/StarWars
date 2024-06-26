const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const fetchStreamingResponse = async (input) => {
	const response = await fetch("https://api.openai.com/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${API_KEY}`,
		},
		body: JSON.stringify({
			model: "gpt-4o",
			messages: [{ role: "user", content: input }],
			max_tokens: 200,
			stream: true,
		}),
	});

	return response.body;
};
