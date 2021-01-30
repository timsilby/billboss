import { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

// Firebase config
const firebaseConfig = {
	apiKey: "AIzaSyCke9rpq-i75-H6k31P-1taD7C19HHNKTc",
	authDomain: "billboss-auth.firebaseapp.com",
	projectId: "billboss-auth",
	storageBucket: "billboss-auth.appspot.com",
	messagingSenderId: "376178555491",
	appId: "1:376178555491:web:afc017c3f4f1c075831656"
};


// Initialise firebase
firebase.initializeApp(firebaseConfig);

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
		return firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(res => {
				setUser(res.user);
				console.log(res.user);
				return res.user;
			});
	};

	// Firebase create user function
	const firebaseSignUp = (email, password) => {
		return firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(res => {
				setUser(res.user);
				return res.user;
			});
	};

	// Firebase logout function
	const firebaseLogout = () => {
		return firebase
			.auth()
			.signOut()
			.then(() => {
				setUser(false);
				console.log("Logged out");
			});
	};

	// Set up useEffect hook to get currently logged in user on mount.
	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(user => {
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
		firebaseSignUp,
		firebaseLogout
	};

}
