import express from 'express'
import path from 'path'
import { config } from 'dotenv'
import colors from 'colors'
import userRoutes from './routers/userRoutes.js'
import { connectDB } from './config/db.js'
import { errorHandler, notFound } from './middelwares/errorMiddelware.js'

config()
connectDB()

const app = express()
app.use(express.json())

// routes
app.use('/api', userRoutes)
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
}

// middelwares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`app runnig on port ${PORT}`.bgCyan))
