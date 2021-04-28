const { Router } = require("express");
const route = Router();
const { Products } = require("../../db");
const { Op } = require("sequelize");

route.get("/:id", async (req, res) => {
	const myposts = await Products.findAll({
		where: { id: req.params.id },
	});
	// console.log("****************++++++++++++++")
	//   console.log(myposts)
	//   console.log("****************++++++++++++")
	res.status(200).send(myposts);
});

module.exports = {
	mypostsRoute: route,
};
