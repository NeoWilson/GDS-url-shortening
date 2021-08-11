const admin = require("firebase-admin")

//const serviceAccount = require("./gds-url-shortening-firebase-adminsdk-ff8u3-c7204c76a4.json")

// Localhost Deployment //
/*
const database = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    apiKey: "AIzaSyALh85EggRNWqXCmJzfOJSDNtYHzewagso",
    authDomain: "gds-url-shortening.firebaseapp.com",
    projectId: "gds-url-shortening",
    storageBucket: "gds-url-shortening.appspot.com",
    messagingSenderId: "648125379467",
    appId: "1:648125379467:web:e6dd5898872e2b6e9b358e",
    measurementId: "G-NE9LHN9TYT"
})
*/

// Firebase Hosting //

const database = admin.initializeApp({
    credential: admin.credential.applicationDefault(),
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
