const express = require("express")

const app = express();
app.use(express.json())


const todos = [
    {
        id : 1,
        title : "ITI",
        body : "ITI session",
        complete : true
    }
    ,
    {
        id : 2,
        title : "CP",
        body : "DP session",
        complete : false 
    }
]


app.get("/" , (req , res) =>{
    
    res.status(200).json({
        success : true,
        data : todos
    })
})
app.get("/todos" , (req , res) =>{
    
    res.status(200).json({
        success : true,
        data : todos
    })
})

app.get("/todos/:id" , (req , res) => {
    var todo = todos.find(L => L.id == req.params.id);
    if(!todo){
        return res.status(404).json({
            success : false,
            error : "id not found"
        })
    }
    else{
        res.status(200).json({
            success : true,
            data : todo
        })
    }
})

app.post("/todos",(req , res) => {
    let id = todos[todos.length-1].id+1
    todos.push({id,...req.body});
    res.status(201).json({
        success : true,
        message : "task add successfully",
    }) 
})

app.patch("/todos/:id",(req , res) => {
    let idx = todos.findIndex(t => t.id == req.params.id)
    if(idx == -1){
        return res.status(404).json({
            success : false,
            error : "id not found"
        })
    }
    console.log(todos[idx])
    todos[idx] = {...todos[idx],...req.body}
    res.status(201).json({
        success : true,
        message : "task upadted successfully",
        data : todos[idx]
    
    }) 
})

app.delete("/todos/:id",(req , res) => {
    let idx = todos.findIndex(t => t.id == req.params.id)
    if(idx == -1){
        return res.status(404).json({
            success : false,
            error : "id not found"
        })
    }
    todos.splice(idx,1)
    res.status(200).json({
        success : true,
        message : "task deleted successfully",
    
    }) 
})

app.listen(3000 , ()=>{
    console.log("server is runnig at port 3000")
})