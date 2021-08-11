const express = require("express")
const functions = require("firebase-functions")

const cors = require("cors")({origin: true, credentials: true})

const redirectRouter =  require("./routes/redirect")
const urlShorten = require("./routes/url")

const app = express()

//const db = require("./config/config.js")

app.use(cors)
app.use(express.json())
app.use('/',redirectRouter)
app.use('/url',urlShorten)

/*
const port = process.env.port || 5000
app.listen(port,() => console.log("Server start, listening to port",5000))  //Listening to port 5000
*/

exports.app = functions.region('asia-southeast1').https.onRequest(app)