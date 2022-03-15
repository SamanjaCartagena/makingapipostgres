const express = require('express');
const fortunes = require('./data/fortunes');
const app = express();

app.get('/fortunes', (req,res) =>{
    console.log('requesting fortunes');
    res.send(fortunes);
});

module.exports= app;