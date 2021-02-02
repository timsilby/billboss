import getToken from "./getToken";


const getTokenHeader = async () => {

	// Call getToken to get an id token from firebase
	const token = await getToken();

	// Add token to custom header
	return {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		}
	};

}

export default getTokenHeader;
