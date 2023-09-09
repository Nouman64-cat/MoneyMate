import mongoose from 'mongoose';

const connectDB = (url) => {
  try {
    return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
    .then(() => {console.log("MongoDB connection successful")})
    .catch((error) => {console.log(error)})
  
  } catch (error) {
    console.log("MongoDB connection failed")
  }
  

}

export default connectDB;