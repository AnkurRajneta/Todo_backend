const express = require('express')
const app = express();
var bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json())

function calculateSum(counter){

    var sum = 0;
    for(var i = 0; i<=counter; i++){
        sum = sum +i;
    }
return sum

}

function handleFirstRequest(req,res){
    var counter = req. body. counter;

    var calculatedSum = calculateSum(counter)

    var answer = "The sum is" + calculatedSum

    res.status(401).send(answer);
}

app.post('/handleSum',handleFirstRequest)


function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)