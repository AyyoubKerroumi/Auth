import express from "express"
import {config} from 'dotenv'
import colors from "colors"
import userRoutes from './routers/userRoutes.js'
import {connectDB} from './config/db.js'
import {errorHandler , notFound} from './middelwares/errorMiddelware.js'

config()
connectDB()

const app = express();
app.use(express.json());

// routes
app.use('/api',userRoutes);

// middelwares
app.use(notFound)
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`app runnig on port ${PORT}`.bgCyan));