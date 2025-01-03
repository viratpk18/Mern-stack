const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    // console.log("hello world");
    // res.send((500), "error occured");
    // res.status(200).send({error:"error occured"});
    // res.json({express: "Learn express"});
    res.render('index.ejs', {text: "pk"});
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);


app.listen(3000);