import express from "express";

const app = express()
const port = 3000

app.get("/", (req, res)=>{
    res.render("home.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port number: ${port}`)
})