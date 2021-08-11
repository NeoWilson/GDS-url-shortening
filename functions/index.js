const express = require("express")
const functions = require("firebase-functions")

const redirectRouter =  require("./routes/redirect")
const urlShorten = require("./routes/url")

const app = express()

//const db = require("./config/config.js")

exports.corsEnabledFunction = (req, res) => {
    // Set CORS headers for preflight requests
    // Allows GETs from any origin with the Content-Type header
    // and caches preflight response for 3600s
  
    res.set('Access-Control-Allow-Origin', '*');
  
    if (req.method === 'POST') {
      // Send response to OPTIONS requests
      res.set('Access-Control-Allow-Methods', 'POST');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      res.set('Access-Control-Max-Age', '3600');
      res.status(204).send('');
    } else {
      res.send('Hello World!');
    }
  };

app.use(require("cors")({origin: true, credentials: true}))
app.use(express.json())
app.use('/',redirectRouter)
app.use('/url',urlShorten)
/*
const port = process.env.port || 5000
app.listen(port,() => console.log("Server start, listening to port",5000))  //Listening to port 5000
*/

exports.app = functions.region('asia-southeast1').https.onRequest(app)