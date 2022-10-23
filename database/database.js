import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const url=process.env.MONGODB_URL;
const database = async() =>{
    try {
        await mongoose.connect(url,{   useNewUrlParser: true,useUnifiedTopology: true});
        console.log("database connected successfully")
    } catch (error) {
        console.log({error:error.message});
    }

}

export default database