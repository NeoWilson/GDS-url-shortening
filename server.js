const express = require('express')

const app = express()

const port = process.env.port || 5000

app.listen(port,() => console.log("Server start, listening to port ${PORT}"))  //Listening to port 5000



