import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
dotenv.config()

const connect = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    } catch (error) {
        throw error

    }
}

mongoose.connection.on("Disconnected", () => {
    console.log("Disconnected from MongoDB")
})

app.listen(5000, () => {
    connect()
    console.log("Server on port 5000")
})