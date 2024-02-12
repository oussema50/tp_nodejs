// routes.js
const express = require('express');
const router = express.Router();
const posts = [{id:1,name:"samsung",price:999},{id:2,name:"iphone",price:1700}]

// Define routes
router.get('/all', (req, res) => {
  res.send( posts);
});

router.get('/:id', (req, res) => {
    const post = posts.find((element) => element.id == req.params.id);
  res.send(post);
});



// Export the router to use in other files
module.exports = router;
