import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/database"

const app = express()
dotenv.config()

// database connection
connectDB()

//middleware
app.use(cors())

const port = process.env.PORT 

app.listen(port, () => console.log(`server is running on port ${port}`))

