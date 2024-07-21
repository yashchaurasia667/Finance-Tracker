// username: yashchaurasia630 password: zA3krXEYjFSq4T66

import express from "express";
import mongoose from "mongoose";
import financialRecordRouter from './routes/financialRecords';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI =
  "mongodb+srv://yashchaurasia630:zA3krXEYjFSq4T66@financetracker.ih7t2yx.mongodb.net/";

mongoose.connect(
  mongoURI
    .then(() => console.log("Connected to mongoDB"))
    .catch((error) => console.error("Failed to connect to MongoDB", error))
);

app.use("/financial-records", financialRecordRouter)

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})