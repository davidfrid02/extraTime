const express = require('express')
const app = express()
app.get('/', (request, response) => {
	response.send('Welcome to the biggest DATA of the Israel football league');
})

app.get('/champion', (request, response) => {
	response.send('beitar Jerusalem!!!');
})

module.exports = app;