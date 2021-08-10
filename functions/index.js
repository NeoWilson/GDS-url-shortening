const express = require("express")

const app = express()

//const db = require("./config/config.js")

app.use(require("cors")({origin: true, credentials: true}))
app.use(express.json())
app.use('/',require("./routes/redirect"))
app.use('/url',require("./routes/url"))

const port = process.env.port || 5000
app.listen(port,() => console.log("Server start, listening to port",5000))  //Listening to port 5000
