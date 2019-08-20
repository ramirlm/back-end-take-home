import express from 'express';
import route from '../model/route';
const router =express.Router();


router.get('/route',async(req,res)=>{
    try {
        const movies = await movie.find({}).exec();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send({message:'Interval server error'})
    }
})


module.exports=router;