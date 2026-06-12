const mongoose=require('mongoose');

async function connectdb(){
    await mongoose.connect("mongodb+srv://user1:TMs6f2zhD1eJJynR@cluster1.1fls9xv.mongodb.net/projectdb");
    console.log("database is connected")
}

module.exports=connectdb;

