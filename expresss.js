const express =require('express');
const path=require('path');
const app =express();
// app.get('',(req,res)=>{
//     console.log('data send by browser',req.query.name)
//     res.send(`
    
//     hello,this is home page   <a href="/about">Go to aboute page</a>`);
// });

// app.get('/about',(req,res)=>{
//     res.send(`
    
//     <input type="text" placeholder="user name" value="${req.query.name}"/>
//     <button>Click me</button> <a href="/">Go to home page</a>
//     `);
// });

// app.get('/help',(req,res)=>{
//     res.send({
//         name:'anil',
//         email:'anil@gmail.com'
//     });
// });




const publicpath=path.join(__dirname,'public');
//app.use(express.static(publicpath));
//console.log(__dirname)

// app.get('',(_, res)=>{
//     res.sendFile(`${publicpath}/home.html`)
//  });
 
//  app.get('/about',(_, res)=>{
//     res.sendFile(`${publicpath}/about.html`)
//  });
//  app.get('*',(_, res)=>{
//     res.sendFile(`${publicpath}/nopage.html`)
//  });


 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine','ejs');
 app.get('pro',(_, res)=>{
    res.render('profile');
 });

app.listen(5000);