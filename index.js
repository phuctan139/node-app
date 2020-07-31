const express =require('express');
let app = express();

app.get('/', (req,res)=>{
    res.send("Hello world this is my first app");
});

app.listen(process.env.PORT ||3000);

module.exports =app;