const express = require("express")
const app = express()

app.use(express.urlencoded({extended : false}))
app.use(express.json())

const gamer = require("./routers/gamerRouter");

app.use("/gamerdata/", gamer);

module.exports = app

