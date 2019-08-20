import mongoose from 'mongoose';

let airline= new mongoose.Schema({
    title:String,
    release_date:String,
    synopsis:String
})


module.exports = mongoose.model("Airline", airline);