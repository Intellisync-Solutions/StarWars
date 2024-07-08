import React from "react";
import PropTypes from "prop-types";
import {
	heroes,
	villains,
	droids,
	bountyHunters,
	jedi,
	sith,
	others,
} from "../../logic/utils/characterTypes";

const CharacterType = ({ onSelect }) => {
	const handleSelect = (category, value) => {
		onSelect({ [category]: value });
	};

	return (
		<div className="p-2">
			<label className="block text-offwhite mb-1">Hero:</label>
			<select
				onChange={(e) => handleSelect("hero", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{heroes.map((name, index) => (
					<option key={`hero-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Villain:</label>
			<select
				onChange={(e) => handleSelect("villain", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{villains.map((name, index) => (
					<option key={`villain-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Droid:</label>
			<select
				onChange={(e) => handleSelect("droid", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{droids.map((name, index) => (
					<option key={`droid-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Bounty Hunter:</label>
			<select
				onChange={(e) => handleSelect("bountyHunter", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{bountyHunters.map((name, index) => (
					<option key={`bountyHunter-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Jedi:</label>
			<select
				onChange={(e) => handleSelect("jedi", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{jedi.map((name, index) => (
					<option key={`jedi-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Sith:</label>
			<select
				onChange={(e) => handleSelect("sith", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{sith.map((name, index) => (
					<option key={`sith-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Other:</label>
			<select
				onChange={(e) => handleSelect("other", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{others.map((name, index) => (
					<option key={`other-${index}`} value={name}>
						{name}
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
