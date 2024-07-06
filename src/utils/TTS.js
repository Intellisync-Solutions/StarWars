const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const fetchTTSAudio = async (text) => {
	const response = await fetch("https://api.openai.com/v1/audio/tts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${API_KEY}`,
		},
		body: JSON.stringify({
			text: text,
			voice: "Nova", // or appropriate voice parameter if different
			model: "tts-1", // Use "tts-1" for real-time or "tts-1-hd" for higher quality
		}),
	});

	if (!response.ok) {
		throw new Error("Failed to fetch TTS audio");
	}

	const data = await response.json();
	return data.audio; // This should be a URL to the audio file
};
