const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
//const cors = require('cors')

const app= express()
const port = 3000;

app.use(bodyParser.json());
app.use(cors())
let todos = []

function findIndex(arr,id){
    for(let i=0; i<arr.length; i++){
        if(arr[i].id === id){  
            return i;
        }
        return -1
    }
}
function removeIndex(arr,index){
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

app.get('/todos',(req,res) => {
      res.json(todos);
});

app.get('/todos/:id',(req,res) => {
    const todoIndex = findIndex(todos,parseInt(req.params.id));

    if(todoIndex === -1){
        res.status(404).send();
    }else{
        res.json(todos[todoIndex]).status (200).send();
    }

})

app.post('/todos',(req,res) => {
    const newTodo ={
         id: Math.floor(Math.random() * 1000000), // unique random id
        title: req.body.title,
        description: req.body.description
    };
    todos.push(newTodo)
    res.status(201).json(newTodo)
});

app.delete('/todos/:id',(req,res)=>{
    const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos = removeAtIndex(todos, todoIndex);
    res.status(200).send();
}})


function started(){
    console.log(`Example app listening on port ${port}`)
}

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(port, started)