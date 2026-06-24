const express=require('express');
const multer=require('multer');
const uploadFile=require('./services/storage.services');
const postmodel=require('./models/post.model');
const cors=require("cors");


const app=express();

app.use(express.json());
app.use(cors());
const upload=multer({storage:multer.memoryStorage()})
app.post('/create-post',upload.single('image'),async (req ,res)=>{
    
    const result=await uploadFile(req.file.buffer);
    const post= await postmodel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message : "post created succusfully",
         post
        
    })
})
app.get('/posts', async (req, res) => {
    try {
        const posts = await postmodel.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            posts
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});




module.exports=app;