import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import mustache from "mustache-express"
import path from "path"
import router from './routes'
import bodyParser from "body-parser"

//Initialize DOTENV
dotenv.config()

//Initialize express
const app = express()

//Initialize CORS
app.use(cors())

//Initialize JSON
app.use(express.json())

//Initialize bodyparser to get forms data
app.use(bodyParser.urlencoded({ extended: false }))

//Set view engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "mst")
app.engine("mst", mustache())

//Set public folder
app.use(express.static(path.join(__dirname, "../public")))

//Routes
app.use(router)

//404
app.use((req, res) => {
    res.render("pages/404")
})

//Start server
app.listen(process.env.APP_PORT, () => {
    console.log("\n" + "Server running at: http://localhost:" + process.env.APP_PORT + "\n")
})
