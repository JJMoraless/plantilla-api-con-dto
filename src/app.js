import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import {router} from "./routes/index.js";


const app = express();

// Midlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/api/filtro', router)




export default app;












