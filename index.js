const express=require('express');
require('dotenv').config();

const app=express();

const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.get('/login',(req,res)=>{
    res.send('<h1>This is login page</h1>');
});

app.listen(port,()=>{
console.log('Application running on port:',port);
}
)