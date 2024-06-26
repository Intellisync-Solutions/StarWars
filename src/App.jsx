import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TextDisplay from "./components/TextDisplay";
import SplashScreen from "./components/SplashScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import { handleInputSubmit } from "./handleInput";

function App() {
	const [userInput, setUserInput] = useState("");
	const [aiResponse, setAiResponse] = useState("");
	const [character, setCharacter] = useState({
		mainCharacter: "Human",
		sidekick: "Friend",
		villain: "Evil Wizard",
	});
	const [settings, setSettings] = useState({
		location: "Forest",
		timePeriod: "Present Day",
	});
	const [elements, setElements] = useState({
		plotTwist: "Unexpected Ally",
		moralLesson: "Honesty",
		storySettingRecommendations: "Epic Battle",
	});
	const [showSplashScreen, setShowSplashScreen] = useState(true);
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setShowSplashScreen(false);
		setShowLogin(true);
	};

	const handleRegister = () => {
		setShowSplashScreen(false);
		setShowRegister(true);
	};

	const handleLoginSuccess = () => {
		console.log("Login success handler called");
		setShowLogin(false);
		setIsLoggedIn(true);
	};

	if (showSplashScreen) {
		return <SplashScreen onLogin={handleLogin} onRegister={handleRegister} />;
	}

	if (showLogin) {
		return <Login onLoginSuccess={handleLoginSuccess} />;
	}

	if (showRegister) {
		return <Register />;
	}

	return (
		<div className="App min-h-screen bg-bluegray-50 dark:bg-bluegray-900 text-gray-900 dark:text-offwhite flex">
			{isLoggedIn && (
				<>
					<Sidebar
						onCharacterSelect={(selected) =>
							setCharacter((prev) => ({ ...prev, mainCharacter: selected }))
						}
						onSettingsSelect={(selected) =>
							setSettings((prev) => ({ ...prev, ...selected }))
						}
						onElementsSelect={(selected) =>
							setElements((prev) => ({ ...prev, ...selected }))
						}
					/>
					<div className="flex-grow">
						<TextDisplay
							userInput={userInput}
							aiResponse={aiResponse}
							onSubmit={(input) =>
								handleInputSubmit(
									input,
									setUserInput,
									setAiResponse,
									userInput,
									aiResponse,
									character,
									settings,
									elements
								)
							}
						/>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
