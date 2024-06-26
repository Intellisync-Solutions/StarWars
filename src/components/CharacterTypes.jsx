import React from "react";
import characterTypes from "../utils/characterTypes";

function CharacterTypes({ onCharacterSelect }) {
	return (
		<div className="p-4">
			<label className="block text-gray-800 dark:text-offwhite mb-2">
				Main Character:
			</label>
			<select
				onChange={(e) => onCharacterSelect({ mainCharacter: e.target.value })}
				className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite">
				{characterTypes.map((type) => (
					<option key={type} value={type}>
						{type}
					</option>
				))}
			</select>
		</div>
	);
}

export default CharacterTypes;
