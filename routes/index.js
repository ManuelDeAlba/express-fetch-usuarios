const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');

router.get('/', (req, res) => {
    res.render('index.ejs', {
    	titulo: "Inicio",
    	mensaje: "Esta es la página de inicio :D"
    });
})

router.get('/usuarios/:id', (req, res) => {
	let min = 1;
	let max = 10;
	let user = 1;
    let id = req.params.id;
    let url = 'https://jsonplaceholder.typicode.com/users/'+id;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(response => {
    	console.log({min,max,response});
    	res.render('usuarios', {min, max, response});
    })
})

module.exports = router;