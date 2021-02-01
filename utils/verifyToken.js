// verifyToken middleware that runs before accessing api routes.
// Gets firebase id token from request header and verifies with Firebase.

require("dotenv").config();
const admin = require("firebase-admin");

const serviceAccount = {
	"type": process.env.FIREBASE_SA_TYPE,
	"project_id": process.env.FIREBASE_SA_PROJECT_ID,
	"private_key_id": process.env.FIREBASE_SA_PRIVATE_KEY_ID,
	"private_key": process.env.FIREBASE_SA_PRIVATE_KEY.replace(/\\n/g, "\n"),
	"client_email": process.env.FIREBASE_SA_CLIENT_EMAIL,
	"client_id": process.env.FIREBASE_SA_CLIENT_ID,
	"auth_uri": process.env.FIREBASE_SA_CLIENT_ID,
	"token_uri": process.env.FIREBASE_SA_TOKEN_URI,
	"auth_provider_x509_cert_url": process.env.FIREBASE_SA_TOKEN_URI,
	"client_x509_cert_url": process.env.FIREBASE_SA_CLIENT_X509_CERT_URL
}

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

async function verifyToken(req, res, next) {

	// Get authorization value from header if it exists
	const header = req.headers.authorization;

	// If the required header exists, grab the token and call verifyIdToken to check it.
	// If authorized, add to the req object before passing the request on.
	if (header !== undefined && header !== "Bearer null" && req.headers.authorization.startsWith('Bearer ')) {

		const idToken = req.headers.authorization.split("Bearer ")[1];

		try {
			const decodedToken = await admin.auth().verifyIdToken(idToken);
			req["currentUser"] = decodedToken;
		}
		catch (err) {
			console.log(err);
		}

	}

	next();

}

module.exports = verifyToken;
