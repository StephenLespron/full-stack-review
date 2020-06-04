require('dotenv').config();
const express = require('express'),
	session = require('express-session'),
	massive = require('massive'),
	{ SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
	app = express(),
	authCtrl = require('./controllers/AuthController');

app.use(express.json());

//Top level middleware
app.use(
	session({
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 }, //2 WEEKS
		secret: SESSION_SECRET,
	})
);

//Auth Endpoints
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.delete('/auth/logout', authCtrl.logout);
app.get('auth/user', authCtrl.getUser);

massive({
	connectionString: CONNECTION_STRING,
	ssl: { rejectUnauthorized: false },
}).then((db) => {
	app.set('db', db);
	console.log(`DB running`);
	app.listen(SERVER_PORT, () => console.log(`with port: ${SERVER_PORT}`));
});
