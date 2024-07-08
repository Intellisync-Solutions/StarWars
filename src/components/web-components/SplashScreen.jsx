import React from "react";
import PropTypes from "prop-types";

const SplashScreen = ({ onLogin, onRegister }) => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-offwhite">
			<div className="p-8 bg-gray-800 rounded shadow-lg">
				<h1 className="text-4xl mb-8 text-white">Welcome to Story AI</h1>
				<button
					onClick={onLogin}
					className="w-full py-2 mb-4 bg-blue-600 rounded hover:bg-blue-500 transition duration-300 text-white shadow-lg hover:shadow-xl">
					Login
				</button>
				<button
					onClick={onRegister}
					className="w-full py-2 bg-green-600 rounded hover:bg-green-500 transition duration-300 text-white shadow-lg hover:shadow-xl">
					Register
				</button>
			</div>
		</div>
	);
};

SplashScreen.propTypes = {
	onLogin: PropTypes.func.isRequired,
	onRegister: PropTypes.func.isRequired,
};

export default SplashScreen;
