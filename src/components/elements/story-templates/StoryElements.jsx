import React from "react";
import PropTypes from "prop-types";
import storyElements from "../../../logic/utils/storyElements";

const StoryElements = ({ onElementsSelect }) => {
	return (
		<div className="p-4 w-full">
			<h3 className="text-lg font-bold text-offwhite mb-2">Story Elements</h3>
			<select
				onChange={(e) => onElementsSelect({ plotTwist: e.target.value })}
				className="w-full p-2 mb-2 rounded bg-white text-blue-800">
				{storyElements.plotTwists.map((plotTwist) => (
					<option key={plotTwist} value={plotTwist}>
						{plotTwist}
					</option>
				))}
			</select>
			<select
				onChange={(e) => onElementsSelect({ moralLesson: e.target.value })}
				className="w-full p-2 rounded bg-white text-blue-800">
				{storyElements.moralLessons.map((moralLesson) => (
					<option key={moralLesson} value={moralLesson}>
						{moralLesson}
					</option>
				))}
			</select>
		</div>
	);
};

StoryElements.propTypes = {
	onElementsSelect: PropTypes.func.isRequired,
};

export default StoryElements;
