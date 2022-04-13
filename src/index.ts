import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers/router.js";
import dotenv from "dotenv";
import handleErrorsMiddleware from "./middleware/handleErrorsMIddleware.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrorsMiddleware);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on ${port}`));
