//imports
import express from 'express';
import dotenv from 'dotenv';
import router from './routes/router.js';
import { connectDB } from './config/db.js';

//env config
dotenv.config();

//variables
const app = express();
const port = process.env.PORT || 8000;
//middleware
app.use(express.json());
app.use("/api", router);

//server run
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`MongoDB is connected`);
});

export default app;