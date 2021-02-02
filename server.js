require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const routes = require("./routes/all-routes");
const verifyToken = require("./utils/verifyToken");


// Set up express
const app = express();

// Set up logger
app.use(logger("dev"));

// Set up express middleware
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", verifyToken);


// Set up static directory
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

// Connect to the database
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
})
	.then(conn => console.log(`Connected to ${conn.connections[0].host}.`))
	.catch(err => console.log(err));

// Start the server
app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}.`);
});
