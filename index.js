import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

import register from './routes/register.js';
import login from './routes/login.js';
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ limit: '10mb' }));

app.use('/api/register/user', register);
app.use('/api/login/user', login);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port http://localhost:${process.env.PORT}`);
    })
  } catch (error) {
    
  }
}

startServer();

