import React from "react";

function StoryElements({ onElementsSelect }) {
	return (
		<div className="p-4">
			<label className="block text-gray-800 dark:text-offwhite mb-2">
				Moral Lesson:
			</label>
			<select
				onChange={(e) => onElementsSelect({ moralLesson: e.target.value })}
				className="w-full p-2 rounded bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite">
				<option value="Honesty">Honesty</option>
				<option value="Bravery">Bravery</option>
				<option value="Compassion">Compassion</option>
				<option value="Perseverance">Perseverance</option>
				<option value="Teamwork">Teamwork</option>
				<option value="Sacrifice">Sacrifice</option>
				<option value="Wisdom">Wisdom</option>
				<option value="Justice">Justice</option>
				<option value="Forgiveness">Forgiveness</option>
				<option value="Love">Love</option>
			</select>
		</div>
	);
}

export default StoryElements;
