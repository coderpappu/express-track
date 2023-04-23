const express = require('express');
const handle = require('./outer');

const app = express();

app.set('view engine', 'ejs');


app.route('/about/mission')
    .get((req, res)=>{
        res.render('pages/home.ejs')
    })
    .post((req, res)=>{
        res.send('Post Response')
    })



app.listen(3000, ()=>{
    console.log('listening port 3000');
})



