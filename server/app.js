const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.get('/', (req,res)=> {

    res.send('we are on home route')
})

app.use('/api', require('./routes/students-route'))
// app.use('/api/create', require('./routes/students-route'))


// connection
mongoose.connect(process.env.DB_CONNECTION, ()=> {
    console.log('Connected to Mdb');
})
const server = app.listen(3000, ()=>{
    console.log(`listening on port`);
});