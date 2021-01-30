const router = require("express").Router();
const usersController = require("../../controllers/users-controller");

router.route("/")
	.get(function (req, res) {
		if (req.query.id) {usersController.getUserById(req, res)}
		else {usersController.getUsers(req, res)}
	})
	.post(usersController.createUser);


module.exports = router;
