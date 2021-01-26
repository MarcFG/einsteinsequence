const express = require('express');
const app = express();
const fs = require('fs');
const { replaceNumber } = require('./replaceNumber');
const { limit } = require('./config/config.json');

app.use(express.static('public'));

app.get('/api', function (req, res) {
    res.send('Back End Exam 1 API!')
})

app.get('/api/sequence', function (req, res) {
    let startNumber = Math.floor((Math.random() * 10) + 1);
    let sequence = [];
    let date = new Date();

    try {
        for (let i = 0; i < limit; i++) {
            sequence.push(replaceNumber(startNumber));
            startNumber++;
        }
    } catch (NullNumberException) {
        res.json("Null number found");
    }

    fs.readFile('output.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        if (data === "") {
            fs.writeFile('output.txt', date + ": " + sequence, (err) => {
                if (err) throw err;
            });
        } else {
            fs.writeFile('output.txt', data + "\n" + date + ": " + sequence, (err) => {
                if (err) throw err;
            });
        }
    });

    res.json(sequence);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port " + port));