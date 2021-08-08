const firebase = require("firebase/app")
require("firebase/auth")
require("firebase/firestore")
const admin = require("firebase-admin")

const serviceAccount = require("./gds-url-shortening-firebase-adminsdk-ff8u3-c7204c76a4.json")
const database = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "gds-url-shortening.appspot.com",
    apiKey: "AIzaSyALh85EggRNWqXCmJzfOJSDNtYHzewagso",
    authDomain: "gds-url-shortening.firebaseapp.com",
    projectId: "gds-url-shortening",
    storageBucket: "gds-url-shortening.appspot.com",
    messagingSenderId: "648125379467",
    appId: "1:648125379467:web:e6dd5898872e2b6e9b358e",
    measurementId: "G-NE9LHN9TYT"
})

const db = admin.firestore()

module.exports = db
