const express = require('express');
const fs = require('fs');

const app = express(); 
const port = process.env.PORT || 3000;

function logger(req, res, next) {
    console.log(req.originalUrl)
    next();
}

app.listen(port, function(err) {
    if (err) console.log("Error in server setup")
        console.log("Server listening on Port", port);
});

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./routes/user');
const invoiceRouter = require('./routes/invoice');
const authRouter = require('./routes/auth');

app.use("/user", userRouter);
app.use("/invoice", invoiceRouter);
app.use("/auth", authRouter);


