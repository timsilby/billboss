import firebase from "firebase/app";

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

const fire = firebase;

export default fire;
