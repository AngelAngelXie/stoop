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
            myTitle, myLocation, addedPhotos, myDescription
        } = req.body;

        const itemDoc = await Item.create({
            myTitle, myLocation, addedPhotos, myDescription
        });
        res.json(itemDoc);
    } catch(e) {
        res.status(422).json(e);
    }
});

app.post('/upload-by-link', async (req, res) => {
    const {link} = req.body;
    const newName = 'photo' + Date.now() + '.jpg';
    await imageDownloader.image({
        url: link,
        dest: __dirname + '/uploads/' + newName,
    });
    res.json(newName);
});

const photosMiddleware = multer({dest:'uploads/'});
app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
    const uploadedFiles = [];
    for(let i = 0; i<req.files.length; i++){
        const {path,originalname} = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + "." + ext;
        fs.renameSync(path, newPath);
        uploadedFiles.push(newPath.replace('uploads/', ''));
    }
    res.json(uploadedFiles);
});

app.get('/item', async (req, res) => {
    res.json( await Item.find() );
});


app.listen(4000);