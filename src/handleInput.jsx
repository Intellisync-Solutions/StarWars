import { fetchStreamingResponse } from "./api";

export const handleInputSubmit = async (
	input,
	setUserInput,
	setAiResponse,
	userInput,
	aiResponse,
	character,
	settings,
	elements
) => {
	const updatedUserInput = `${userInput}${input} `;
	setUserInput(updatedUserInput);

	const prompt = `You are an imaginative storyteller. You use vivid descriptions to detail each character, the world environment, scenes, and activities. You will continue from where the user left off and continue to weave intricate details with out-of-this-world storytelling.

	You continue the story from where the USER'S last sentence OR WORD ends. You then expand on the user's creative writing by completing the next sentence or paragraph from where the user stopped writing.

RULES:
1. Always complete EVERY sentence and paragraph.
2. Continue the story from where the user stops.
3. Ensure the continuation is coherent and seamlessly follows the user's last input incorporating the {Story Configuration}.
4. DO NOT REPEAT THE USER'S INPUT.

***Guidelines: //You will use the story configuration settings to help narrate the creative writing along with the user.***

{Story Configuration}:
Main Character: ${character.mainCharacter}
Sidekick: ${character.sidekick}
Villain: ${character.villain}
Location: ${settings.location}
Time Period: ${settings.timePeriod}
Plot Twist: ${elements.plotTwist}
Moral Lesson: ${elements.moralLesson}
Story Setting Recommendations: ${elements.storySettingRecommendations}

Please continue the story based on the text provided below.

<IMPORTANT> DO NOT REPEAT THE USER INPUT!

Story so far: ${userInput}${aiResponse}

The last input from the user was: "${input}"


`;

	const stream = await fetchStreamingResponse(prompt);
	const reader = stream.getReader();
	const decoder = new TextDecoder();

	let newAiResponse = "";
	let sentenceBuffer = "";

	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		const decodedValue = decoder.decode(value);
		const lines = decodedValue.split("\n");

		for (const line of lines) {
			if (line.trim().startsWith("data: ")) {
				const jsonString = line.trim().substring(6);
				if (jsonString !== "[DONE]") {
					try {
						const json = JSON.parse(jsonString);
						if (json.choices && json.choices.length > 0) {
							const content = json.choices[0].delta?.content || "";
							sentenceBuffer += content;

							// Check if the sentenceBuffer ends with a sentence-ending punctuation
							if (
								sentenceBuffer.endsWith(".") ||
								sentenceBuffer.endsWith("!") ||
								sentenceBuffer.endsWith("?")
							) {
								newAiResponse += sentenceBuffer;
								sentenceBuffer = "";
							}
						}
					} catch (error) {
						console.error("Failed to parse JSON:", error);
					}
				}
			}
		}
	}

	// Append any remaining buffer to the response if it forms a complete sentence
	if (
		sentenceBuffer.endsWith(".") ||
		sentenceBuffer.endsWith("!") ||
		sentenceBuffer.endsWith("?")
	) {
		newAiResponse += sentenceBuffer;
	}

	setAiResponse((prev) => prev + newAiResponse);
};
