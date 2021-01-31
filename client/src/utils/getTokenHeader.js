import fire from "./fire"


const getTokenHeader = async () => {

	// Grab the current user
	const user = fire.auth().currentUser;

	// Get the current user's id token from firebase
	const token = await user.getIdToken();

	// Add token to custom header
	const tokenHeader = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	console.log(tokenHeader);
	return tokenHeader;

}

export default getTokenHeader;
