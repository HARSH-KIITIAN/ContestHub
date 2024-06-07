const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/contests", async (req, res) => {
    try {
        const now = new Date().toISOString();
        const apiUrl = `https://clist.by/api/v4/contest/?username=${process.env.API_USERNAME}&api_key=${process.env.API_KEY}&start__gt=${now}`;
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contests' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
