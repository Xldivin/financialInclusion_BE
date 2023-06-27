import express, { Application } from "express"
import bodyParser from 'body-parser';
import cors from "cors"
import data from "./routes/dataRoutes.js";

const app:Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', data);

export default app