const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.header('Access-Control-Allow-Origin', "*");
	console.log("+ New request detected " + (req.headers['x-forwarded-for'] || req.connection.remoteAddress));
	res.send({
		name: "John Smith"
	})
});

const server = app.listen(8081, () => {
	console.log("Server started at http://localhost:8081");
});