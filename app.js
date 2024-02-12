// app.js
const express = require('express');
const routes = require('./route/routes');
const routes_p = require('./route/post_routes');
const app = express();
 // Import the routes module

const PORT = 9000;
app.use('/auth', routes);
app.use('/post', routes_p);
app.get('/', (req, res) => {
  res.send('my_app');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
