import mongoose from 'mongoose';

let route= new mongoose.Schema({
    title:String,
    from: String,
    to: String,
})


module.exports = mongoose.model("Route", route);