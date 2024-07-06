import React from "react";
import PropTypes from "prop-types";
import storySettings from "../../../logic/utils/storySettings";

const StorySettings = ({ onSettingsSelect }) => {
	return (
		<div className="p-4 w-full">
			<h3 className="text-lg font-bold text-offwhite mb-2">Settings</h3>
			<select
				onChange={(e) => onSettingsSelect({ location: e.target.value })}
				className="w-full p-2 mb-2 rounded bg-white text-blue-800">
				{storySettings.locations.map((location) => (
					<option key={location} value={location}>
						{location}
					</option>
				))}
			</select>
			<select
				onChange={(e) => onSettingsSelect({ timePeriod: e.target.value })}
				className="w-full p-2 rounded bg-white text-blue-800">
				{storySettings.timePeriods.map((timePeriod) => (
					<option key={timePeriod} value={timePeriod}>
						{timePeriod}
					</option>
				))}
			</select>
		</div>
	);
};

StorySettings.propTypes = {
	onSettingsSelect: PropTypes.func.isRequired,
};

export default StorySettings;
