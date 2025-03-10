import express from "express";
import cors from "cors";
import {connectToDatabase} from "./services/database.js";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.Port || 5000

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    try {
        const database = await connectToDatabase()
    } catch (error) {
        console.log('error handling request:', error);
        res.status(500).json({ error: 'error'})
    }
    run().cath(console.dir)
    res.json({status: "server is running!"})

})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });