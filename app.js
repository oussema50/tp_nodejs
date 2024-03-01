const express = require('express');
const userRoutes = require('./route/userRoutes');
const postRoutes = require('./route/postRoutes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
PORT = process.env.PORT || 9000;
dotenv.config();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/post', postRoutes);

mongoose.connect(process.env.MONGODB_URI).then(()=>
  {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });
    console.log('connect to mongdb');
  }
).catch((err)=>consotl.log(err))
