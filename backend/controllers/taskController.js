const { default: mongoose } = require('mongoose');
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
const getTasks =async (req,res) =>{
    try{
        const tasks =  await taskModel.find({});
        res.status(200).json(tasks);

    }catch(e){
        res.status(400).json({error:e.message})
    }
}

//to get a simple task

const getSingleTask = async (req,res) =>{

    const {id} =  req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message : 'task Not found'})
    }
    try{
        const singleTask = await taskModel.findById(id)
    res.status(200).json(singleTask) 
    }
    catch(e){
        res.status(400).json({error:e.message})
    }
}

const updateTask = async (req,res) =>{

    const {id} =  req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message : 'task Not found'})
    }
    try{
        const task = await taskModel.findByIdAndUpdate({
            _id : id}
        ,{
            ...req.body
        })
        res.status(200).json(task);
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

const deleteTask = async (req,res) =>{

    const {id} =  req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message : 'task Not found'})
    }
    try{
        const deltask = await taskModel.findByIdAndDelete(id);
        res.status(200).json(deltask);
    }
    catch(e){
        res.status(400).json({error: e.message});
    }
}
module.exports = {createTask , getTasks ,getSingleTask, updateTask ,deleteTask};

