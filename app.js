// app.js
const express = require('express');
const routes = require('./route/routes');
const routes_post = require('./route/post_routes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
PORT = process.env.PORT || 9000;
dotenv.config();
app.use(express.json());
app.use('/auth', routes);
app.use('/post', routes_post);
mongoose.connect(process.env.MONGODB_URI).then(()=>
  {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });
    console.log('connect to mongdb');
  }
).catch((err)=>consotl.log(err))

