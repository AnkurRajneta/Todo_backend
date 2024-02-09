const express = require('express')
var bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.json())

function calculatedSum(counter){
    var sum = 0;
    for(var i = 0; i<=counter; i++){
        sum = sum + i;
    }
    return sum
}

function calculatedMul(counter){
    var mul = 1;
    for(var i=1;i<=counter;i++){
        mul = mul*i;
    }
    return mul
}

function handleFirstRequest(req,res){
    var counter = req.body.counter;

    var answer = {
        sum: calculatedSum(counter),
        mul:calculatedMul(counter)
    }
    res.status(200).send(answer);
}

function givePage(req,res){
    res.send(`<head>
    <title>
        Hello from page
    </title>
</head>
<body>
    <i>
        hi there
    </i>
</body>`)

//or
//res.sendFile(__dirname + 'index.html')

}
app.post('/handle',handleFirstRequest)
app.get('/', givePage)



function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started)


