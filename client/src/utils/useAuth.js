import { useState, useEffect, useContext, createContext } from "react";
import fire from "./fire"
import "firebase/auth";

// Create context
const authContext = createContext();

// Create context provider
export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>
};

// Create hook for other components to get auth state
export const useAuth = () => {
	return useContext(authContext);
};

// Create the provider hook that contains firebase methods and manages user state
function useProvideAuth() {

	// Set up user state
	const [user, setUser] = useState(null);

	// Firebase login function
	const firebaseLogin = (email, password) => {
		return fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(res => {
				setUser(res.user);
				return res.user;
			});
	};

	// Firebase create user function
	const firebaseSignup = async (userData) => {
		const res = await fire
			.auth()
			.createUserWithEmailAndPassword(userData.email, userData.password);
		await res.user.updateProfile({ displayName: userData.displayName });
		console.log("signup");
		console.log(res.user);
		setUser(res.user);
		return res.user;
	};

	// Firebase logout function
	const firebaseLogout = () => {
		return fire
			.auth()
			.signOut()
			.then(() => {
				setUser(false);
				console.log("Logged out");
			});
	};

	// Subscribe to user auth.
	useEffect(() => {
		const unsubscribe = fire.auth().onAuthStateChanged(user => {
			if (user) { setUser(user); }
			else { setUser(false); }
		});

		// Cleanup
		return () => unsubscribe();
	}, []);

	// Return the user object and firebase functions.
	return {
		user,
		firebaseLogin,
		firebaseSignup,
		firebaseLogout
	};

}
