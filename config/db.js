import mongoose from "mongoose";

const dbConnect=async ()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("db connected")

    }
    catch(err){
        console.log(err.message)
    }

}

export default dbConnect