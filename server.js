const express = require('express');
const app = express();
//now attached to app we have methods 
//to start our server and send responses to the client

app.get('/', (request, response) => {
	response.send('Hi Im the server')
})
app.get('/anythingWeWant', (request, response) => {
	response.send('Whatever we want')
})
app.get('/MondaySnow',(request, response) => {
	response.send('Snow Is Awesome')
})
app.get('/tacos', (req, res) => {
	res.send('I am')
})



app.listen(3000, () => {
	console.log('Server is listening on Port 3000');
})