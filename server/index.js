import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors";
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
app.use(cors());
import userRouter from "./routes/user.routes.js"
import websiteRouter from "./routes/website.routes.js"
import billingRouter from "./routes/billing.routes.js"
import { stripeWebhook } from "./controllers/stripeWebhook.controller.js"
import dns from "node:dns/promises"
dns.setServers(["8.8.8.8","1.1.1.1"]);

const app=express()

app.post("/api/stripe/webhook",express.raw({type:"application/json"}),stripeWebhook)
const port=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://3.89.189.112:8000",
    credentials:true
}))
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/website",websiteRouter)
app.use("/api/billing",billingRouter)

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port ${port}`);
});