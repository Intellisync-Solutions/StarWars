import React from "react";
import PropTypes from "prop-types";
import { FaBars, FaTimes } from "react-icons/fa";

const SidebarToggle = ({ isSidebarOpen, toggleSidebar }) => {
	return (
		<button
			onClick={toggleSidebar}
			className="text-2xl p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition duration-300">
			{isSidebarOpen ? <FaTimes /> : <FaBars />}
		</button>
	);
};

SidebarToggle.propTypes = {
	isSidebarOpen: PropTypes.bool.isRequired,
	toggleSidebar: PropTypes.func.isRequired,
};

export default SidebarToggle;
