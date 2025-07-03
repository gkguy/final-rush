const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const invoiceData = req.body;

    console.log('Received invoice:', invoiceData);

    res.status(200).send('Invoice data recieved');
})
// POST /invoice
// Logs successful receipt of invoice data for testing purposes

module.exports = router;