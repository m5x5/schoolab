const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Welcome to the new school assistant.')
})

app.listen(3232, () => console.log('Server listening on port 3232'));
