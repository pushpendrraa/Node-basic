const express=require('express');
const multer=require('multer');

const app=express();

app.use(express.json());
const upload=multer({storage:multer.memoryStorage()})
app.post('/create-post',upload.single('image'),async (req ,res)=>{
    console.log(req.body);
    console.log(req.file);
    res.status(201).json({
        message : "post created succusfully"
    })
})




module.exports=app;