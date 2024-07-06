import React, { useState } from "react";
import PropTypes from "prop-types";
import characterTypes from "../../../logic/utils/characterTypes";

const CharacterType = ({ onSelect }) => {
	const [userName, setUserName] = useState("");

	const handleNameChange = (e) => {
		const name = e.target.value;
		setUserName(name);
		onSelect({ userName: name });
	};

	return (
		<div className="p-4">
			<label className="block text-offwhite mb-2">Your Name:</label>
			<input
				type="text"
				value={userName}
				onChange={handleNameChange}
				className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
				placeholder="Enter your name"
			/>
			<label className="block text-offwhite mb-2">Main Character:</label>
			<select
				onChange={(e) => onSelect({ mainCharacter: e.target.value })}
				className="w-full p-2 rounded bg-white text-blue-800">
				{characterTypes.map((type, index) => (
					<option key={`${type.type}-${index}`} value={type.type}>
						{type.type} ({type.example})
					</option>
				))}
			</select>
		</div>
	);
};

CharacterType.propTypes = {
	onSelect: PropTypes.func.isRequired,
};

export default CharacterType;
