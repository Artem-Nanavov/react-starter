require('dotenv').config();

const express = require('express');
const path = require('path');

const { port } = require('../config/dev');

const app = express();

const rootPath = path.join(__dirname, '../');

app.use('/', express.static(`${rootPath}dist`));

app.get('*', (_, res) => {
	res.sendFile(`${rootPath}dist/index.html`);
});

app.listen(port);
