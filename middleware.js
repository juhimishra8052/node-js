const express=require('express');
const app=express();

const reqFilter=require('./midd');
const route=express.Router();

//app.use(reqFilter)
route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('welcome to middleware');
});
app.get('/users',(req,res)=>{
    res.send('Welcome Users');
});


route.get('/about',reqFilter,(req,res)=>{
    res.send('hlw i am juhi');
});

route.get('/contact',reqFilter,(req,res)=>{
    res.send('contact us ');
});
app.use('/',route);
app.listen(5000);





