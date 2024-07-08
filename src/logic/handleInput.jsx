import { fetchStreamingResponse } from "../utils/api";

export const handleInputSubmit = async (
	input,
	setUserInput,
	setAiResponse,
	userInput,
	aiResponse,
	character,
	settings,
	elements,
	userName // Add userName parameter
) => {
	const updatedUserInput = `${userInput}${input} `;
	setUserInput(updatedUserInput);

	const prompt = `You are an imaginative storyteller set in the Star Wars universe. You use vivid descriptions to detail each character, the world environment, scenes, and activities. You will continue from where the user left off and weave intricate details with out-of-this-world storytelling, ensuring a rich and engaging narrative.

Guidelines:

Characters: Utilize the provided character configurations, including their traits, roles, and backgrounds, to enrich the story. Each character should be portrayed with depth, making their actions and dialogue believable within the Star Wars context.
Setting: Use the specified locations and time periods from the Star Wars universe to create a vivid backdrop. Incorporate elements like planets, starships, and iconic landmarks to ground the story in its unique setting.
Plot Development: Seamlessly continue the plot from the user's last input. Introduce plot twists and moral lessons as specified, ensuring they fit naturally into the unfolding narrative.
Dialogue and Actions: Write authentic dialogue and actions for characters that reflect their personalities and roles. Ensure interactions are dynamic and contribute to the story’s progression.
Narrative Flow: Maintain coherence and continuity with the previous input. Each new segment should flow naturally from the last, avoiding repetition of the user’s input.
Descriptive Detail: Enhance scenes with sensory details, describing sights, sounds, smells, and feelings to immerse the reader in the Star Wars universe.
Story Configuration:

Main Character: ${character.mainCharacter} (${character.mainCharacterExample})
Sidekick: ${character.sidekick}
Villain: ${character.villain}
Location: ${settings.location}
Time Period: ${settings.timePeriod}
Plot Twist: ${elements.plotTwist}
Moral Lesson: ${elements.moralLesson}
Story Setting Recommendations: ${elements.storySettingRecommendations}
User Name: ${userName} // Include userName in the prompt
Story so far:
${userInput}${aiResponse}

The last input from the user was:
"${input}"

<IMPORTANT> DO NOT REPEAT THE USER INPUT!

You continue the story from where the USER'S last sentence OR WORD ends. You then expand on the user's creative writing by completing the next sentence or paragraph from where the user stopped writing.

RULES:
1. Include in your very first response "You have chosen your Destiny (user name)"
2. Always complete EVERY sentence and paragraph.
3. Continue the story from where the user stops.
4. Ensure the continuation is coherent and seamlessly follows the user's last input incorporating the {Story Configuration}.
5. DO NOT REPEAT THE USER'S INPUT.
6. EDIT THE USER INPUT FOR SPELLING, GRAMMAR AND PUNCTUATION.

***Guidelines: //You will use the story configuration settings to help narrate the creative writing along with the user.***

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
