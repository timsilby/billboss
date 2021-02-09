// Require the models. Export the object which will be picked up by the controller.
const dbModels = {

	bills: require("./Bill"),
	billsets: require("./Billset"),
	deposits: require("./Deposit"),
	depositsets: require("./Depositset"),
	accounts: require("./Account"),
	transactions: require("./Transaction"),

}

module.exports = dbModels;
