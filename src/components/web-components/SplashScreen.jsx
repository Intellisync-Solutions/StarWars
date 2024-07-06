import React from "react";
import PropTypes from "prop-types";

const SplashScreen = ({ onLogin, onRegister }) => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-900 text-offwhite">
			<div className="p-8 bg-gray-800 rounded shadow-lg text-center">
				<h2 className="text-2xl mb-4">Welcome to Star Wars Story Creator</h2>
				<p className="mb-6 text-lg">Your Destiny Awaits</p>
				<button
					onClick={onLogin}
					className="w-full py-2 mb-2 bg-blue-600 rounded hover:bg-blue-500 transition duration-300">
					Login
				</button>
				<button
					onClick={onRegister}
					className="w-full py-2 bg-green-600 rounded hover:bg-green-500 transition duration-300">
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
