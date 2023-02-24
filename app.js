const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send(`<h1>Hello ${process.env.NAME}</h1>`)
})

app.listen(4000, console.log('app is workig'));