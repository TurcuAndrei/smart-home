const express = require('express')

const cookieSession = require('cookie-session')

const app = express()
const port = 3000

const fs = require('fs')

let ejs = require('ejs');

app.use("/css",express.static("css"))
app.use("/images",express.static("images"))
app.use("/js",express.static("js"))
app.use("/.vs",express.static(".vs"))
app.use((req, res, next) => {
   
    res.renderFile = function (file, params) {
        
        ejs.renderFile(`./${file}.ejs`, params, {}, function(err, str) {
            if (err) {
                res.status(500).send(err.message);
            }
            res.send(str)
        });
    }                                  
    next();
})

app.get('/', async(req, res) => {
    res.renderFile('home', {}, res);
})

app.get('/', async(req, res) => {
    res.renderFile('contact', {}, res);
})

app.get('/', async(req, res) => {
    res.renderFile('servicii', {}, res);
})

app.get('/', async(req, res) => {
    res.renderFile('device', {}, res);
})

app.get('/', async(req, res) => {
    res.renderFile('asistent', {}, res);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  