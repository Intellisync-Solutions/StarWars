import React from "react";
import PropTypes from "prop-types";

function SplashScreen({ onLogin, onRegister }) {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-bluegray-800 text-offwhite">
			<h1 className="text-4xl font-bold mb-8">
				Welcome to Interactive Story Builder
			</h1>
			<div className="space-x-4">
				<button
					onClick={onLogin}
					className="bg-primary text-offwhite py-2 px-4 rounded hover:bg-primary-dark transition-colors">
					Login
				</button>
				<button
					onClick={onRegister}
					className="bg-primary text-offwhite py-2 px-4 rounded hover:bg-primary-dark transition-colors">
					Register
				</button>
			</div>
		</div>
	);
}

SplashScreen.propTypes = {
	onLogin: PropTypes.func.isRequired,
	onRegister: PropTypes.func.isRequired,
};

export default SplashScreen;
