import { useAuth } from "./useAuth";

function useTokenHeader() {

	// Grab the useAuth hook
	const auth = useAuth();

	// Get the current user's id token from firebase
	const token = auth.firebaseGetIdToken();

	// Add token to custom header
	const tokenHeader = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};

	return tokenHeader;

}

export default useTokenHeader;
