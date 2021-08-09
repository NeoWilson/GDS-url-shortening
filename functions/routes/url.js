const express = require("express")
const validator = require("validator")

const router = express.Router()

const baseURL = "http:localhost:5000"

const db = require("../config/config.js")

router.post("/shorten", async (req,res) =>{
    if (validator.isURL(baseURL)){
        return res.status(500).json("Server Unreachable")
    }
    //console.log(req.body)
    const full_url = req.body.fullUrl          //Insert full url
    const new_slug = req.body.newSlug          //Insert slug
    //console.log(new_slug)
    //console.log(full_url)
    if (validator.isURL(full_url)){
        try{
            //console.log("test2")
            const urls = db.collection("urls")
            const check1 = await urls.where("url", "==",full_url).get()
            const check2 = await urls.where("slug", "==",new_slug).get()
            //console.log(check1)
            //console.log(check2)
            if (!check1.empty){
                console.log("check url failed")
                res.status(403).json("Url is unavailable. Select another url.")
                //Insert redirect back to homepage
            } else {
                if (!check2.empty){
                    console.log("check slug failed")
                    res.status(403).json("Url slug is unavailable. Select another url slug.")
                    //Insert redirect back to homepage
                } else {
                    const query = await urls.add({
                        url: full_url,
                        slug: new_slug
                    })
                    console.log("Url Added to Firebase")
                    res.end()
                    //Insert redirect back to homepage
                }
            }
        } catch (err){
            console.log(err)
            res.status(500).json("Server Error")
        }
    } else {
        res.status(401).json("Invalid url")
    }
})

module.exports = router







