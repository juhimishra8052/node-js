const express = require('express');
const path = require('path');
const app = express();

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/profile', (_, res) => {
    const user={
        name:'juhi mishra',
        email:'jm@gmail.com',
        skills:['php','js','node','java','python']
    }
    res.render('profile',{user});
});

app.get('/login',(_, res)=>{

    res.render('login');
});

// app.listen(5001, () => {
//     console.log('Server is running on port 5001');
// });
app.listen(5001);