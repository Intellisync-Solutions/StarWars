import React from "react";

function StorySettings({ onSettingsSelect }) {
	return (
		<div className="p-4 space-y-4">
			<div>
				<label className="block text-gray-800 dark:text-offwhite mb-2">
					Location:
				</label>
				<select
					onChange={(e) => onSettingsSelect({ location: e.target.value })}
					className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite">
					<option value="Forest">Forest</option>
					<option value="Desert">Desert</option>
					<option value="City">City</option>
					<option value="Village">Village</option>
					<option value="Mountain">Mountain</option>
					<option value="Ocean">Ocean</option>
					<option value="Space">Space</option>
					<option value="Underground">Underground</option>
					<option value="Castle">Castle</option>
					<option value="Cave">Cave</option>
				</select>
			</div>

			<div>
				<label className="block text-gray-800 dark:text-offwhite mb-2">
					Time Period:
				</label>
				<select
					onChange={(e) => onSettingsSelect({ timePeriod: e.target.value })}
					className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite">
					<option value="Present Day">Present Day</option>
					<option value="Future">Future</option>
					<option value="Medieval">Medieval</option>
					<option value="Victorian">Victorian</option>
					<option value="Prehistoric">Prehistoric</option>
				</select>
			</div>

			<div>
				<label className="block text-gray-800 dark:text-offwhite mb-2">
					Plot Twist:
				</label>
				<select
					onChange={(e) => onSettingsSelect({ plotTwist: e.target.value })}
					className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite">
					<option value="Unexpected Ally">Unexpected Ally</option>
					<option value="Betrayal">Betrayal</option>
					<option value="Secret Identity">Secret Identity</option>
					<option value="Lost Treasure">Lost Treasure</option>
					<option value="Time Travel">Time Travel</option>
					<option value="Magical Artifact">Magical Artifact</option>
					<option value="Revenge">Revenge</option>
					<option value="Rescue Mission">Rescue Mission</option>
					<option value="Mystery">Mystery</option>
					<option value="Haunting">Haunting</option>
				</select>
			</div>

			<div>
				<label className="block text-gray-800 dark:text-offwhite mb-2">
					Story Setting Recommendations:
				</label>
				<select
					onChange={(e) =>
						onSettingsSelect({ settingRecommendation: e.target.value })
					}
					className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite">
					<option value="Epic Battle">Epic Battle</option>
					<option value="Romantic Adventure">Romantic Adventure</option>
					<option value="Quest for Power">Quest for Power</option>
					<option value="Survival Challenge">Survival Challenge</option>
					<option value="Mystery Investigation">Mystery Investigation</option>
					<option value="Rebellion">Rebellion</option>
					<option value="Friendship Journey">Friendship Journey</option>
					<option value="Self-Discovery">Self-Discovery</option>
					<option value="Redemption Arc">Redemption Arc</option>
					<option value="Scientific Exploration">Scientific Exploration</option>
				</select>
			</div>
		</div>
	);
}

export default StorySettings;
