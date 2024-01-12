const express = require('express')
const router = express.Router() // router function is part of express and is used to create a routes
                                //indexRouter variable on server.js file will set to router variable in index.js file
router.get('/',(req,res)=>{
    //res.send('Hello World')
    res.render('index')
})

module.exports = (router)