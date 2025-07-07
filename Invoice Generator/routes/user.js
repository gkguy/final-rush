const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const userData = req.body;
  console.log("User data has been recieved:", userData);
  
  res.status(201).json({
    message: 'User created successfully',
    data: userData
  });
});

module.exports = router;

