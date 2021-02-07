// Require the models. Export the object which will be picked up by the controller.
const dbModels = {

	bills: require("./Bill"),
	billsets: require("./Billset"),
	contributions: require("./Contribution"),
	contributionsets: require("./Contributionset"),
	account: require("./Account"),
	transactions: require("./Transaction"),

}

module.exports = dbModels;
