import express from 'express';
import data from '../data.js';
import bcrypt from 'bcryptjs';
import User from '../modals/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';
const UserRouter=express.Router();
UserRouter.get('/seed',expressAsyncHandler(async(req,res)=>{
    // await User.remove({});
const createdUsers=await  User.insertMany(data.users);
console.log(createdUsers); 
res.send({createdUsers});
} )
);
UserRouter.post("/signin",expressAsyncHandler(async(req,res)=>{
    const user=await User.findOne({email:req.body.email});
    console.log(typeof user.password);
    const pas =bcrypt.hashSync('1234',8);
    console.log(bcrypt.compareSync('1234',pas));
    console.log(bcrypt.compareSync(req.body.password,user.password));
    // console.log(bcrypt.compareSync(res.body.password,user.password));
    if(user){
        if(bcrypt.compareSync(req.body.password,user.password)){
            console.log(generateToken(user));
res.send({
    _id:user._id,
    name:user.name,
    email:user.email,
    isAdmin:user.isAdmin,
    token:generateToken(user)
});
return;   
}


}
res.status(401).send({message:'Invalid User Details'});
}));

UserRouter.post("/register",expressAsyncHandler(async(req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,8)
    });
    const createdUser=await user.save();
    res.send({
        _id:createdUser._id,
        name:createdUser.name,
        email:createdUser.email,
        isAdmin:createdUser.isAdmin,
        token:generateToken(createdUser)
    }); 
}))




export default UserRouter;