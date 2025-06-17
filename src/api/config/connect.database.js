const mongoose = require('mongoose');
const chalk = require('chalk');

const connectDatabase = async () => {
	const connect = await mongoose.connect(process.env.MONGO_URL);

	console.info(chalk.bold.cyan(`Mongo Connected: ${connect.connection.host}`));
};

module.exports = connectDatabase;
