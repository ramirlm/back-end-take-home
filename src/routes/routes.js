import express from 'express';
import route from '../model/route';
const router =express.Router();


router.get('/route',async(req,res)=>{
    try {
        const routes = await route.find({}).exec();
        res.status(200).send(routes);
    } catch (error) {
        res.status(500).send({message:'Interval server error'})
    }
})


module.exports=router;