const express = require('express');
const handler = require('./outer');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const adminRouter = express.Router();

adminRouter.get("/dashboard", (req, res) =>{
    res.send('We are in dashboard');
})
app.use('/admin', adminRouter);

app.get('/user/:id',handler )
app.get('/check/',(req, res) =>{

    console.log(req.accepts('json'));

} )

app.listen(3000, ()=>{
    console.log('listening port 3000');
})



