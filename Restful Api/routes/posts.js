const express = require('express');
const router = express.Router();
const post = require('../models/post');

router.get('/' , (req,res) => {
    res.send('We are on posts');
});


router.post('/', (req,res) => {
    const post = new post({
        title: req.body.title,
        description: req.body.decription
    });

    post.save()
        .then(data => {
           res.json(data);
         });
    
});

module.exports = router;
