import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`MongoDb connected : ${conn.connection.host} `.green)
  } catch (error) {
    console.error(`Error : ${error.message}`.red)
    process.exit(1)
  }
}

