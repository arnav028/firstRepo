const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("abe rehnde");
    console.log("hi")  //ye server par vhi response show karvayega client ko jo ap doge yaha
})

app.get('/greetings',(req,res)=>{
    res.send("hogya na mazak");  //ye server par vhi response show karvayega
})

app.get('/beat',(req,res)=>{
    res.send("mazak");  //ye server par vhi response show karvayega
})


app.listen(4444,()=>{   //4444 yah code number hai
    console.log("http://localhost:"+4444);
})