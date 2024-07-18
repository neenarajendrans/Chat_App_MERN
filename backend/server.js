import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;




app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT,()=>{
    connectToMongoDB();  
    console.log(`Server Running on http://localhost:${PORT}`)
});