const express = require('express')
const router = express.Router()


const testUser = {
    email: 'admin@gmail.com',
    password: 'password123'
};
// Hardcoded for testing purposes

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === testUser.email && password === testUser.password) {
        // No signed JWT
        res.status(200).json({ message: 'Login successful', token: 'fake-jwt-token' });
    } else {
        res.status(401).json({ message: 'Credentials are invalid' });
    }
});
// POST /auth/login 
// Simplistic insecure authentication for demonstration purposes

module.exports = router;