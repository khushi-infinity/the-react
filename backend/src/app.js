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


app.get('/notes', (req,res)=>{
    //sends the notes array as response
    res.status(200).json({
        message: 'Notes fetched successfully',
        notes: notes
    })
})


/* Delete Notes */
app.delete('/notes/:id',(req,res)=>{
    const index= (req.params.id);
    delete notes[index];

    res.status(200).json({
        message: 'Note deleted successfully'
    })
})


// Update the notes of the description
app.patch('/notes/:id', (req,res)=>{
    const index = req.params.id;
    const description = req.body.description;

    notes[index].description = description;
    
    res.status(200).json({
        message: 'Note updated successfully'
    })
})
module.exports = app;