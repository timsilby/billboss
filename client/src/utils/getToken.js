import fire from "./fire"

const getToken = async () => {

	// Grab the current user
	const user = fire.auth().currentUser;

	// Return a token for the current user from firebase
	return await user.getIdToken();

}

export default getToken;
