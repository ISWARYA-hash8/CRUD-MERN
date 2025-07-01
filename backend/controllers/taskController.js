const taskModel = require('../models/TaskModel');

const createTask =async (req,res) =>{
    const {title,description} =req.body
    try{
        const task = await taskModel.create({title,description});
        res.status(200).json({
            message : 'Data Received',
            data : req.body
        })
    }
    catch(err){
        res.status(400).json({error:err.message});
        

    }
};
const getTasks = (req,res) =>{
    
}

module.exports = {createTask};

