// import all package use in nodejs
const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser= require('body-parser');


// inport all routers

const userRouter = require("./routers/userRouter")
const patientRouter = require("./routers/patientRouter")
const laboRouter = require("./routers/laboRouter")
const appts = require("./routers/appointRouter");
const Analys = require("./routers/analysesRouter");

// config app
const app = express();
require("dotenv").config()
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","auth-token");
    res.header("Access-Control-Allow-Methods","*");
    next();
    });

// data base connect
mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db is connected'))
  .catch(err => console.log('not connect to the database'))



  app.use('/api/user', userRouter)
  app.use('/api/patient', patientRouter)
  app.use('/api/labo', laboRouter)
  app.use('/api/appt', appts)
  app.use('/api/analys', Analys)

// run server
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.json("hello world")
})
app.listen(port, ()  => {
    console.log(`server is running in port: ${port}`)
})

