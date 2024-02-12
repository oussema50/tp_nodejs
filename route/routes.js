// routes.js
const express = require('express');
const router = express.Router();

// Define routes
router.get('/login', (req, res) => {
    res.sendFile('login.html', { root:'./' });
});

router.get('/register', (req, res) => {
    res.sendFile('register.html', { root:'./' });
});



// Export the router to use in other files
module.exports = router;
