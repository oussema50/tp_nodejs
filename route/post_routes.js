const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
// get all posts
router.get('/all',async (req, res) => {
  try{
    const allPosts = await Post.find();
    res.status(200).json({
      allPosts
    });
  }catch(err){
    console.log(err);
    res.status(500).json({
        errorMessage:'please try again later'
    })
  }
});
//create a post
router.post('/create',async(req,res)=>{
  const {post} = req.body
  try{
    const newPost = new Post()
    newPost.post = post
    await newPost.save()
    res.status(200).json({
      succesMessage:'post is created',
    })
  }catch(err){
    console.log(err)
    res.status(500).json({
      errorMessage:'please try again'
    })
  }
})
//update post
router.put('/update/:id',async(req,res)=>{
  const postId = req.params.id
  try{
     await Post.findByIdAndUpdate(postId,req.body)
   
    res.status(200).json({
      succesMessage:'post is updated',
    })
  }catch(err){
    console.log(err)
    res.status(500).json({
      errorMessage:'please try again'
    })
  }
})

//delete post
router.delete('/delete/:id',async(req,res)=>{
  try{
    const postId = req.params.id
    await Post.findByIdAndDelete(postId)
    res.status(200).json({
      succesMessage:'post is deleted'
    })
  }catch(err){
    console.log(err)
    res.status(500).json({
      errorMessage:'please try again'
    })
  }
})

module.exports = router;
