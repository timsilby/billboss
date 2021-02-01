// Require the models. Export the object which will be picked up by the controller.
const dbModels = {

	accounts: require("./Account"),
	bills: require("./Bill"),
	billsets: require("./Billset"),
	transactions: require("./Transaction"),
	users: require("./User")

}

module.exports = dbModels;
