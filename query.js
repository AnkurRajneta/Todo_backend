const express = require('express')
const app = express()
const port = 3000;

function calculateSum(counter) {
    var sum = 0;
    for (var i = 1; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function handleFirstRequest(req, res) {
    var counter = req.query.counter;
    var calculatedSum = calculateSum(counter);
    console.log(calculatedSum);

    var answer = "The answer is " + calculatedSum;
    res.send(answer);
}

app.get('/', handleFirstRequest);

function started() {
    console.log(`app listening on port ${port}`);
}

app.listen(port, started);
