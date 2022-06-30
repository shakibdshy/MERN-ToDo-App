import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import postRouter from "./routes/post.js"
import cors from "cors";
const app = express();
dotenv.config();

const connect = async () => {
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

app.use(cors());
app.use(express.json());

app.use("/api/post", postRouter);

app.listen(5000, () => {
    connect()
    console.log("Server on port 5000")
})