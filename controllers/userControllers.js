const asyncHandler = require("express-async-handler")
const User = require("../model/modelUser")

//Post (create) operation
const setUsers = asyncHandler(async(req,res) => {
    try{
        if(!req.body.name && !req.body.gender
            && !req.body.maritalStatus) {
                return res.status(404).json({message: "fill field"})
            }
            const user = await User.create({
                name: req.body.name,
                gender: req.body.gender,
                maritalStatus: req.body.maritalStatus
            })
            res.status(200).json({message: "field completed"})
    } catch (err) {
        res.status(505).json({message:"server error"})
    }
})

//Get (read) operation
const getUsers = asyncHandler(async (req,res) => {
    try{
        const user = await User.find()
            if (!user) {
                return res.status(404).json({message:"no user found"})
            }res.status(200).json(user)
    } catch (error) {
        console.log(`error: ${error}`)
        res.status(500).json({message:"error"})
    }
})

//put (update) operation
const updateUsers = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id)
        if(!user) {
            return res.status(403).json({message: 'User not found'})
        }
            const updateUsers = await User.findByIdAndUpdate(req.params.id, req.body,{new:true}) //that updated data can be saved as a new resources here
            res.status(200).json(updateUsers)
})

//delete operation
const deleteUsers = asyncHandler(async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) {
            return res.status(403).json({message: 'User not found'})
        } res.status(200).json({id: req.params.id})
    } catch(error) {
        console.log(`error: ${error}`)
        res.status(500).json({message: 'Internal Server Error'})
    }
})



module.exports = {setUsers, getUsers, updateUsers, deleteUsers}