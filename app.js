var express = require('express');
var mongoose = require('mongoose');
var app   = express()
var cors = require('cors')
var bodyParser = require('body-parser')
app.use(cors({
    origin:"*",
    optionsSuccessStatus: 200,

}))

const connect  = ()=>{
    //TODO:change the mongoose configuration
    return mongoose.connect("mongodb+srv://fb:fb@cluster0.2978s7r.mongodb.net/?retryWrites=true&w=majority")
}
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


require("./mainRoutes")(app);

app.listen(3333,()=>{
    connect()
    console.log("db connected")
})