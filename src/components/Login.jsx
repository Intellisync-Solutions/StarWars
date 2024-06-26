import React, { useState } from "react";


function Login({ onLoginSuccess }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("Handle login called");
		console.log("onLoginSuccess:", onLoginSuccess);

		// Hardcoded credentials for testing
		const testUsername = "testuser";
		const testPassword = "password123";

		if (username === testUsername && password === testPassword) {
			setError("");
			if (typeof onLoginSuccess === "function") {
				onLoginSuccess();
			} else {
				console.error("onLoginSuccess is not a function");
			}
		} else {
			setError("Invalid username or password");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-bluegray-50 dark:bg-bluegray-900 transition-colors">
			<div className="login-screen bg-white dark:bg-bluegray-800 p-8 rounded-lg shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold text-gray-900 dark:text-offwhite mb-4">
					Login
				</h2>
				<form onSubmit={handleLogin} className="flex flex-col space-y-4">
					<label className="flex flex-col">
						<span className="text-gray-700 dark:text-gray-300">Username:</span>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="mt-1 p-2 rounded border bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-gray-700 dark:text-gray-300">Password:</span>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="mt-1 p-2 rounded border bg-bluegray-200 dark:bg-bluegray-700 text-gray-900 dark:text-offwhite"
						/>
					</label>
					{error && <p className="error text-red-500">{error}</p>}
					<button
						type="submit"
						className="mt-4 p-2 bg-primary text-offwhite rounded hover:bg-primary-dark transition-colors">
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
