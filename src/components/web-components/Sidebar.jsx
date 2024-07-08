import React, { useState } from "react";
import PropTypes from "prop-types";
import CharacterType from "../elements/CharacterTypes";
import StorySettings from "../elements/StorySettings";
import StoryElements from "../elements/StoryElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faCog } from "@fortawesome/free-solid-svg-icons";

function Sidebar({
	onCharacterSelect,
	onSettingsSelect,
	onElementsSelect,
	onLogout,
	isSidebarOpen,
	toggleSidebar,
	setUserName,
}) {
	const [name, setName] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
		setUserName(e.target.value); // Update the parent's state
	};

	return (
		<div
			className={`${
				isSidebarOpen ? "w-64" : "w-20"
			} bg-gray-900 text-white h-screen p-4 transition-all duration-300`}>
			<div className="mb-4 flex justify-between items-center">
				<button onClick={onLogout} className="text-white">
					<FontAwesomeIcon icon={faSignOutAlt} size="lg" />
				</button>
				<button onClick={toggleSidebar} className="text-white">
					<FontAwesomeIcon icon={faCog} size="lg" />
				</button>
			</div>
			<div className={`${isSidebarOpen ? "block" : "hidden"}`}>
				<div className="mb-4">
					<label className="block text-sm">Your Name:</label>
					<input
						type="text"
						value={name}
						onChange={handleNameChange}
						className="w-full p-2 mt-1 rounded bg-gray-800 border border-gray-700"
					/>
				</div>
				<CharacterType onSelect={onCharacterSelect} />
				<StorySettings onSettingsSelect={onSettingsSelect} />
				<StoryElements onElementsSelect={onElementsSelect} />
			</div>
		</div>
	);
}

Sidebar.propTypes = {
	onCharacterSelect: PropTypes.func.isRequired,
	onSettingsSelect: PropTypes.func.isRequired,
	onElementsSelect: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
	isSidebarOpen: PropTypes.bool.isRequired,
	toggleSidebar: PropTypes.func.isRequired,
	setUserName: PropTypes.func.isRequired,
};

export default Sidebar;
