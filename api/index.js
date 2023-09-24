const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader');
const multer = require('multer');
const fs = require('fs');

const Item = require('./models/Item.js');

app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname+'/uploads'));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect('mongodb+srv://stoopt:4wwzhLDksPWg5Ydt@stoopt.dig8phs.mongodb.net/?retryWrites=true&w=majority');

app.get('/testing', (req, res) => {
    res.json('hello this is a test duck duck');
});

app.post('/item', async (req, res) => {
    try{
        const {
            myTitle, myLocation, myDescription
        } = req.body;

        const itemDoc = await Item.create({
            myTitle, myLocation, myDescription
        });
        res.json(itemDoc);
    } catch(e) {
        res.status(422).json(e);
    }
});




app.listen(4000);