import express from 'express';
import { router } from './routes';
require('dotenv/config')
const app = express();

app.use(router)


app.listen(process.env.PORT, () => console.log("Server is runnings"))
