import userModel from "../model/userModel.js";

export const create = async (req, res) => {
    try {
        let userdata = new userModel(req.body);
        const {email} = userdata;
        const userExist = await userModel.findOne({email});
        if(userExist) {
            return res.status(400).json({message: "User already exists"});
        } 
        const saveduser = await userdata.save();
        res.status(201).json({saveduser});
    }
    catch(err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const fetch = async (req, res) => {
    try {
        res.send("hello bro!   ^_^");
    }
    catch(err) {
        res.status(500).json({error: "Internal Server Error"});
    }
}