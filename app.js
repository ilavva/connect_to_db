
require('dotenv').config();
const express = require('express');
const app = express();
const myRepository = require('./myRepository');

app.get("/langs", async (req, res) => {
    let x = "test";
    x = await myRepository.getLangs();
    res.json(x);
});



app.use(express.static('public'));
//=========================
app.listen(3000, function () {
    console.log('My app is http://localhost:3000');
});