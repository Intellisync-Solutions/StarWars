import React from "react";
import PropTypes from "prop-types";
import CharacterTypes from "../elements/story-templates/CharacterTypes";
import StorySettings from "../elements/story-templates/StorySettings";
import StoryElements from "../elements/story-templates/StoryElements";
import StarWarsButton from "./StarWarsButton";
import SidebarToggle from "./SidebarToggle";

function Sidebar({
	onCharacterSelect,
	onSettingsSelect,
	onElementsSelect,
	onLogout,
	theme,
	toggleTheme,
	isSidebarOpen,
	toggleSidebar,
}) {
	return (
		<div
			className={`h-screen ${
				isSidebarOpen ? "w-64" : "w-16"
			} transition-width duration-300 ease-in-out flex flex-col bg-gradient-to-b from-blue-800 to-black relative`}>
			<div className="absolute top-2 right-2">
				<SidebarToggle
					isSidebarOpen={isSidebarOpen}
					toggleSidebar={toggleSidebar}
				/>
			</div>
			{isSidebarOpen && (
				<div className="flex flex-col flex-grow justify-between p-4">
					<div className="space-y-4">
						<CharacterTypes onSelect={onCharacterSelect} />
						<StorySettings onSelect={onSettingsSelect} />
						<StoryElements onSelect={onElementsSelect} />
					</div>
					<div className="flex flex-col items-center mt-4">
						<StarWarsButton onClick={onLogout}>Logout</StarWarsButton>
					</div>
				</div>
			)}
		</div>
	);
}

Sidebar.propTypes = {
	onCharacterSelect: PropTypes.func.isRequired,
	onSettingsSelect: PropTypes.func.isRequired,
	onElementsSelect: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
	theme: PropTypes.string.isRequired,
	toggleTheme: PropTypes.func.isRequired,
	isSidebarOpen: PropTypes.bool.isRequired,
	toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
