import User from "../models/user.js"

export const signup=async (req,res)=>{
    const {username,password}=req.body

    try{
        const user=await registerUser(username,password)
        res.status(200).send("user register successfull")

    }
    catch(err){
        res.status(500).send(err.message)
    }

}

export const login=()=>{

}

export const logout=()=>{

}