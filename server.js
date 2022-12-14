import express from "express";
import database from "./database/database"
import cors from "cors"
import dotenv from "dotenv"
import blogRoutes from "./routes/blogRoutes"

dotenv.config()

const app = express();
app.use(express.json())
app.use(cors({ origin: "*" }));
app.use("/blog", blogRoutes)

const port = process.env.PORT || 3000;

database()
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
