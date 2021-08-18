const express = require("express")
const router = express.Router()

const db = require("../config/config.js")

const full_url = undefined
const slug = undefined
var result = {full_url,slug}

router.get("/:slug",async (req,res) => {
    try {
        const urls = db.collection("urls")
        const query = await urls.where("slug", "==",req.params.slug).get()
        if (query.empty){
            return res.status(404).json("URL Not Found.")
        } else {
            query.forEach(doc => {
                result = doc.data()
            })

            url = result.url
            //return res.redirect(url)
            regexCheck = new RegExp ("^(http|https)://","i")    //Newly added to check url for "http" or "https"
            if (regexCheck.test(url)){
                res.redirect(url)
            } else {
                res.redirect("http://" + url)
            }
        }
    } catch (err){
        console.error(err)
        res.status(500).json("Server Error")
    }
})

module.exports = router