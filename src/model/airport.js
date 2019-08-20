import mongoose from 'mongoose';

let airport= new mongoose.Schema({
    title:String,
    release_date:String,
    
})


module.exports = mongoose.model("Airport", airport);