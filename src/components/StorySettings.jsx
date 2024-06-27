import React from "react";
import PropTypes from "prop-types";
import storySettings from "../utils/storySettings";

function StorySettings({ onSettingsSelect }) {
	return (
		<div className="p-4 space-y-4">
			<div>
				<label className="block text-offwhite dark:text-offwhite mb-2">
					Location:
				</label>
				<select
					onChange={(e) => onSettingsSelect({ location: e.target.value })}
					className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite">
					{storySettings.locations.map((location) => (
						<option key={location} value={location}>
							{location}
						</option>
					))}
				</select>
			</div>

			<div>
				<label className="block text-offwhite dark:text-offwhite mb-2">
					Time Period:
				</label>
				<select
					onChange={(e) => onSettingsSelect({ timePeriod: e.target.value })}
					className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite">
					{storySettings.timePeriods.map((period) => (
						<option key={period} value={period}>
							{period}
						</option>
					))}
				</select>
			</div>

			<div>
				<label className="block text-offwhite dark:text-offwhite mb-2">
					Moral Lesson:
				</label>
				<select
					onChange={(e) => onSettingsSelect({ moralLesson: e.target.value })}
					className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite">
					{storySettings.moralLessons.map((lesson) => (
						<option key={lesson} value={lesson}>
							{lesson}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

StorySettings.propTypes = {
	onSettingsSelect: PropTypes.func.isRequired,
};

export default StorySettings;
