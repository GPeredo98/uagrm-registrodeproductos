const mysql = require('promise-mysql');

const connetion = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'electron_db'
});

function getConnection() {
	return connetion;
}

module.exports = {
	getConnection
}