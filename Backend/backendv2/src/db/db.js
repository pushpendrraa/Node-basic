const mongoose=require("mongoose");

async function connectDb(){
    await mongoose.connect("mongodb+srv://user1:TMs6f2zhD1eJJynR@cluster1.1fls9xv.mongodb.net/db1");
    console.log("connected to database")

}
module.exports=connectDb;
     
