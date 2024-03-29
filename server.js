const app = require("./app")

const dotenv = require("dotenv")

dotenv.config({path : "config/config.env"})

app.listen(process.env.PORT, () => {
    console.log(`server is listening on http://localhost:${process.env.PORT}`)
})