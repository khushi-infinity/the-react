// creates a server
const express = require('express');

const app = express();
//use a middleware as the express do not understand the body request 
app.use(express.json());

const notes = []

/* title, description */
app.post('/notes', (req, res)=>{
    //pushed the request body to the notes array
    notes.push(req.body);

    // sends the response as created successfully with status code 201
    res.status(201).json({
        message: 'Note created successfully'
    })
})


module.exports = app;