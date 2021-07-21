const express = require('express');
const morgan = require ('morgan');
//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(8080);

app.use(morgan('tiny'));
app.use(express.static('public'));



app.get('/', (req, res)=>{

    const blogs = [
        {title: 'hello ', snipper: 'fsdif fjioew qwiep rojm ' },
        {title: 'hello ', snipper: 'fsdif fjioew qwiep rojm ' },
        {title: 'hello ', snipper: 'fsdif fjioew qwiep rojm ' },
    ];
    res.render('index', {title: "HOME", blogs });
})



app.get('/about', (req, res)=>{
   // res.send('<p>ABOUTPAGE</p>');
res.render('about' , {title: "About"})
})

app.get('/blogs/create' , (req,res)=>{
    res.render('create', {title: "Create Blog"});
})

app.use((req,res)=>{
res.status(404).render('404', {title: " 404 "});
})


