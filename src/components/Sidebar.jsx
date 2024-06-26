import React from "react";
import CharacterTypes from "./CharacterTypes";
import StorySettings from "./StorySettings";
import StoryElements from "./StoryElements";
import {
	FaPrint,
	FaEnvelope,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaSignOutAlt,
} from "react-icons/fa";


function Sidebar({
	onCharacterSelect,
	onSettingsSelect,
	onElementsSelect,
	onLogout,
}) {
	const handlePrint = () => {
		window.print();
	};

	const handleEmail = () => {
		const subject = "Check out my story";
		const body =
			"Here is the story I've been working on: " + document.body.innerText;
		window.location.href = `mailto:?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;
	};

	const handleShare = (platform) => {
		const text = "Check out this amazing story I created!";
		const url = window.location.href;
		let shareUrl = "";

		switch (platform) {
			case "facebook":
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
					url
				)}&quote=${encodeURIComponent(text)}`;
				break;
			case "twitter":
				shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
					url
				)}&text=${encodeURIComponent(text)}`;
				break;
			case "linkedin":
				shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
					url
				)}&title=${encodeURIComponent(text)}`;
				break;
			default:
				break;
		}

		window.open(shareUrl, "_blank");
	};

	return (
		<div className="sidebar bg-bluegray-800 text-offwhite p-4">
			<h2 className="text-2xl font-bold mb-4">Story Configuration</h2>
			<CharacterTypes onCharacterSelect={onCharacterSelect} />
			<StorySettings onSettingsSelect={onSettingsSelect} />
			<StoryElements onElementsSelect={onElementsSelect} />
			<div className="sidebar-navigation space-y-2 mt-4">
				<button
					onClick={handlePrint}
					className="w-full flex items-center justify-center p-2 bg-primary rounded text-offwhite hover:bg-primary-dark transition-colors">
					<FaPrint className="mr-2" /> Print
				</button>
				<button
					onClick={handleEmail}
					className="w-full flex items-center justify-center p-2 bg-primary rounded text-offwhite hover:bg-primary-dark transition-colors">
					<FaEnvelope className="mr-2" /> Email
				</button>
				<button
					onClick={() => handleShare("facebook")}
					className="w-full flex items-center justify-center p-2 bg-primary rounded text-offwhite hover:bg-primary-dark transition-colors">
					<FaFacebook className="mr-2" /> Share on Facebook
				</button>
				<button
					onClick={() => handleShare("twitter")}
					className="w-full flex items-center justify-center p-2 bg-primary rounded text-offwhite hover:bg-primary-dark transition-colors">
					<FaTwitter className="mr-2" /> Share on Twitter
				</button>
				<button
					onClick={() => handleShare("linkedin")}
					className="w-full flex items-center justify-center p-2 bg-primary rounded text-offwhite hover:bg-primary-dark transition-colors">
					<FaLinkedin className="mr-2" /> Share on LinkedIn
				</button>
				<button
					onClick={onLogout}
					className="w-full flex items-center justify-center p-2 bg-primary rounded text-offwhite hover:bg-primary-dark transition-colors">
					<FaSignOutAlt className="mr-2" /> Log Out
				</button>
			</div>
		</div>
	);
}

export default Sidebar;
