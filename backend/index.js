const express = require('express');
const app = express();
app.use('/', express.static(__dirname + '/'));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/teacher/main/index.html');
});

app.get('/teacher', (req, res) => {
	res.sendFile(__dirname + '/teacher/main/index.html');
});

app.get('/student', (req, res) => {
	res.sendFile(__dirname + '/student/index.html');
});

app.listen(3232, () => console.log('Server listening on port 3232'));
