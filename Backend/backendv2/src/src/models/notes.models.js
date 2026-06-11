const mongoose=require("mongoose")

const noteschema=new mongoose.Schema({
    titel: String,
    description: String
})

const notemodel=mongoose.model("note",noteschema);
module.exports=notemodel;