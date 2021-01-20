const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

router.get('/', (req,res) => {
    console.log(`we in getMenu`);
    axios.get(`https://sandbox.dev.clover.com/v3/merchants/${process.env.SMOKIN_MERCH_ID}?access_token=${process.env.SMOKIN_API_TOKEN}`)
    .then((response) => {
        console.log(response.data);
        res.send(response.data)
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;;