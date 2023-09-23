const express = require('express');
const app = express();
const cors = require('cors');

// mongoDB password 4wwzhLDksPWg5Ydt

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get('/testing', (req, res) => {
    res.json('hello this is a test duck duck');
});



app.listen(4000);