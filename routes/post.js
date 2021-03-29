const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const schema = mongoose.Schema
const postschema = new schema({
    title:String,
    imageurl:String,
    description:String,
    postid:String
})

const PostModel = mongoose.model('posts',postschema);
//add new post
router.post('/addnewpost',(req,res)=>{
    const newpost = new PostModel({
        title:req.body.title,
        imageurl:req.body.imageurl,
        description:req.body.description,
        postid:req.body.postid
    })
    newpost.save(function(err){
        if(!err){
            res.send('New Post added successfully')
        }else{
            res.send(err)
        }
    })
})
//read posts
router.get('/getposts',(req,res)=>{
    PostModel.find({},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })})
    //get element by id
    router.post('/getpostdata',(req,res)=>{
        PostModel.find({postid:req.body.postid},(docs,err)=>{
            if(!err){
                res.send(docs)
            }else{
                res.send(err)
            }
        })
    })
    //update post
    router.post('/updatepost',(req,res)=>{
        PostModel.findOneAndUpdate({postid:req.body.postid},{
            title:req.body.title,
            imageurl:req.body.imageurl,
            description:req.body.description
        },(err)=>{
            if(!err){
                res.send('Post Updated successfully')
            }else{
                res.send(err)
            }

        })
    })
    //delete post
    router.post('/deletepost',(req,res)=>{
        PostModel.findOneAndDelete({postid:req.body.postid},(err)=>{
            if(!err){
                res.send('Post Deleted successfully')
            }else{
                res.send(err)
            }
        })
    })
module.exports = router