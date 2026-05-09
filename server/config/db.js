import mongoose from "mongoose"
import dns from "node:dns"

const connectDb = async () => {
    try {
        const mongoUrl = process.env.MONGODB_URL
        if (mongoUrl && mongoUrl.startsWith("mongodb+srv://")) {
            dns.setServers(["8.8.8.8", "1.1.1.1"])
        }

        await mongoose.connect(mongoUrl, {
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        })
        console.log("db connected")
    } catch (error) {
        console.log("db error", error)
        throw error
    }
}

export default connectDb