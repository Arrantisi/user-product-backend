import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import session from "express-session";
import userRoute from "./routers/userRoute.js";
import productRoute from "./routers/productRoute.js";
// import sequelize from "./config/database.js";

dotenv.config()
const app = express();
const port = process.env.BASE_PORT

app.use(express.json());
app.use(fileUpload())
app.use(express.static("public"))

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(session({
    secret: process.env.BASE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: "auto"
    }
}));

// (async () => {
//     await sequelize.sync()
// })()

app.use(userRoute);
app.use(productRoute);

app.listen(port, () => console.log(`server up and run at port ${port}`))