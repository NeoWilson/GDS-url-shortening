
const express = require("express")
const validURL = require("valid-url")

const router = express.Router()

const baseURL = "http:localhost:5000"

const db = require("../config/config.js")

router.post("/shorten", async (req,res) =>{
    if (!validURL.isUri(baseURL)){
        return res.status(401).json("Invalid Base URL")
    }
    const full_url = req.body.full_url        //Insert full url
    const slug = req.body.slug                //Insert slug
    if (!validURL.isUri(full_url)){
        try{
            const check = await db.collection("urls").where("url", "==",full_url).get()
            if (check){
                return
            } else {
                const res = await db.collection("urls").add({
                    url: full_url,
                    slug: slug
                })
            }
        } catch (err){
            console.log(err)
            res.status(500).json("Server Error")
        }
    } else {
        res.status(401).json("Invalid full URL")
    }
})

module.exports = router







