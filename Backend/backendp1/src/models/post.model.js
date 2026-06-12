const mongoose =require('mongoose');

const postschema=new mongoose.Schema({
    image : String,
    caption :String
})

const postmodel=mongoose.Model("posts",postschema);
module.exports=postmodel;