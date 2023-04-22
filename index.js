const express = require('express');

const app = express();

// app.use(express.json());

// app.use(express.raw());
// app.use(express.text());

// access static folder 

// app.use(express.static(`${__dirname}/public/`, {
//     index : "home.html"
// }))

const router = express.Router({
    caseSensitive : true,
});

app.use(router);

router.get('/About', (req, res)=>{
    res.send('This is home page!');
})

app.post('/', (req, res)=>{

    res.send('This is home page with post method');

})

app.listen(3000, ()=>{
    console.log('listening port 3000');
})



