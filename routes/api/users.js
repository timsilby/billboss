const router = require("express").Router();
const usersController = require("../../controllers/users-controller");

router.route("/")
	.get(usersController.getUserById)
	.post(usersController.createUser)
	.put(usersController.updateUser)
	.delete(usersController.deleteUser);


module.exports = router;
