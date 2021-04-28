const sequelize = require("sequelize");
let db;

if (process.env.DATABASE_URL) {
	db = new sequelize(process.env.DATABASE_URL);
} else {
	db = new sequelize({
		dialect: "sqlite",
		storage: __dirname + "/test.db",
	});
}

const Users = db.define("user", {
	id: {
		type: sequelize.DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	username: {
		type: sequelize.DataTypes.STRING(30),
		unique: true,
		allowNull: false,
	},
	email: {
		type: sequelize.DataTypes.STRING(100),
	},
	password: {
		type: sequelize.DataTypes.STRING,
		allowNull: false,
	},
});

const Products = db.define("product", {
	id: {
		type: sequelize.DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	username: {
		type: sequelize.DataTypes.STRING(30),
		allowNull: false,
	},
	name: {
		type: sequelize.DataTypes.STRING(1000),
		allowNull: false,
	},
	price: {
		type: sequelize.DataTypes.STRING,
		allowNull: false,
	},
	company: {
		type: sequelize.DataTypes.STRING,
		allowNull: true,
	},
	avatar: {
		type: sequelize.DataTypes.STRING,
	},
});

const CartProducts = db.define("product", {
	id: {
		type: sequelize.DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	username: {
		type: sequelize.DataTypes.STRING(30),
		allowNull: false,
	},
	name: {
		type: sequelize.DataTypes.STRING(1000),
		allowNull: false,
	},
	price: {
		type: sequelize.DataTypes.STRING,
		allowNull: false,
	},
	company: {
		type: sequelize.DataTypes.STRING,
		allowNull: true,
	},
	avatar: {
		type: sequelize.DataTypes.STRING,
	},
});

module.exports = {
	db,
	Users,
	Products,
	CartProducts,
};
