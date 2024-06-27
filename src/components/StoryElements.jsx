import React from "react";
import PropTypes from "prop-types";
import storyElements from "../utils/storyElements";

function StoryElements({ onElementsSelect }) {
	return (
		<div className="p-4">
			<label className="block text-offwhite dark:text-offwhite mb-2">
				Moral Lesson:
			</label>
			<select
				onChange={(e) => onElementsSelect({ moralLesson: e.target.value })}
				className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite">
				{storyElements.moralLessons.map((lesson) => (
					<option key={lesson} value={lesson}>
						{lesson}
					</option>
				))}
			</select>

			<label className="block text-offwhite dark:text-offwhite mb-2 mt-4">
				Plot Twist:
			</label>
			<select
				onChange={(e) => onElementsSelect({ plotTwist: e.target.value })}
				className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite">
				{storyElements.plotTwists.map((twist) => (
					<option key={twist} value={twist}>
						{twist}
					</option>
				))}
			</select>
		</div>
	);
}

StoryElements.propTypes = {
	onElementsSelect: PropTypes.func.isRequired,
};

export default StoryElements;
