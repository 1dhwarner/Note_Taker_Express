// got this code from the same week's mini project. If anything, the hw was easier here since we only had one page to route to 

const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notes');


const app = express();

app.use('/notes', notesRouter);


module.exports = app;