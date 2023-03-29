const User = require("../Models/User.mysql");
const bcrypt = require("bcrypt");

function hashPassword(plaintextPassword) {
    return bcrypt.hashSync(plaintextPassword, 10);
}

exports.create = async function (req, res) {
	const users = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: hashPassword(req.body.password),
		roles: req.body.roles,
		createdAt: req.body.createdAt,
	});

	await User.create(users, async (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Une erreur est arrive",
			});
		}

		res.json(data);
	});
};

exports.getAll = async function (req, res) {
	await User.getAll((err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Une erreur est arrive",
			});
		}

		res.json(data);
	});
};
exports.getOne = async function (req, res) {
	await User.getOne(req.params.id, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Une erreur est arrive",
			});
		}

		res.json(data);
	});
};

exports.updateById = async function (req, res) {
	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: hashPassword(req.body.password),
		roles: req.body.roles,
		createdAt: req.body.createdAt,
	});

	await User.updateById(req.params.id, user, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Une erreur est arrive",
			});
		}

		res.json(data);
	});
};

exports.deleteById = async function (req, res) {
	await User.deleteById(req.params.id, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || "Une erreur est arrive",
			});
		}

		res.json(data);
	});
};
