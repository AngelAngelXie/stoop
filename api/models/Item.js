const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    myTitle : String,
    myLocation : String,
    myLng: String,
    myLat: String,
    addedPhotos: [String],
    myDescription: String,
});

const ItemModel = mongoose.model('Item', ItemSchema);

module.exports = ItemModel;