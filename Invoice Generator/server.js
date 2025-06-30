const express = require('express')
const fs = require('fs')

const app = express(); 
const port = process.env.PORT || 3000;

app.use(express.json())

app.listen(port, function(err) {
    if (err) console.log("Error in server setup")
        console.log("Server listening on Port", port);
});




