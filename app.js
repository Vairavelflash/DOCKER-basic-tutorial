const express = require('express')
const app = express();

app.get("/",(req,res) => {
    res.send("Hello from node, from inside container");
});

app.listen(3000,()=>{
    console.log("running on port 3000")
})