const express = require('express');
const cors = require('cors'); // prevent chrome cross-source errors

const app = express();

// middleware
app.use(express.json()); // we can handle JSON data
app.use(express.urlencoded({extended: false})); // we can handle URL encoded data
app.use(cors());

app.use((req, res) => {
    console.log('MW triggered');
    res.sendStatus(200);
});

app.get('*', (req, res) => {
    console.log('test');
    res.send('test');
})

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log('========================');
    console.log('===== SERVER START =====');
    console.log(`===== on port ${port} =====`);
    console.log('========================');
});