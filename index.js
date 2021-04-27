const express = require('express');
const path = require('path');

const app = express();

app.set('port', 3000);

app.set('view engine', 'ejs');

app.use(require('./routes/index'))

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
	console.log("Servidor en el puerto", app.get('port'))
})