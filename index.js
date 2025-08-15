const express = require('express');
const urlRouter = require('./routes/urlRouter');
const {connectMongoDb} = require('./connection');

const app = express();
const PORT = 8000;

//db connection
connectMongoDb('mongodb://127.0.0.1:27017/short-url')
.then(()=> console.log("Mongo DB connected."));

//middlewares
app.use(express.json()); 
app.use(express.urlencoded({extended:false}));

//routes
app.use('/', urlRouter);
app.get('/favicon.ico', (req, res) => res.status(204).end());

//listening to port
app.listen(PORT, () => console.log("Listening to port 8000."));