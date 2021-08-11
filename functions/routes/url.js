const express = require("express")
const validator = require("express-validator")

const router = express.Router()

const baseURL = "https://asia-southeast1-gds-url-shortening.cloudfunctions.net/app/"

const db = require("../config/config.js")

router.post("/shorten", async (req,res) =>{
    res.header('Access-Control-Allow-Origin', '*')
    if (validator.isURL(baseURL)){
        return res.status(500).json("Server Unreachable")
    }
    const full_url = req.body.fullUrl          //Insert full url
    const new_slug = req.body.newSlug          //Insert slug
    if (validator.isURL(full_url)){
        try{
            const urls = db.collection("urls")
            const check1 = await urls.where("url", "==",full_url).get()
            const check2 = await urls.where("slug", "==",new_slug).get()
            if (!check1.empty){
                console.log("check url failed")
                res.status(403).json("Url is unavailable. Enter another URL.")
            } else {
                if (!check2.empty){
                    console.log("check slug failed")
                    res.status(403).json("Url slug is unavailable. Enter another URL slug.")
                } else {
                    const query = await urls.add({
                        url: full_url,
                        slug: new_slug
                    })
                    console.log("Url Added to Firebase")
                    res.end(JSON.stringify('"' + baseURL + new_slug + "\" added."))
                }
            }
        } catch (err){
            console.log(err)
            res.status(500).json("Server Error")
        }
    } else {
        res.status(401).json("Invalid URL")
    }
})

module.exports = router







