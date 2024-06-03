const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    const now = new Date().toISOString();
    const apiUrl = `https://clist.by/api/v4/contest/?username=${process.env.API_USERNAME}&api_key=${process.env.API_KEY}&start__gt=${now}`;
    res.render('index', { apiUrl });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
