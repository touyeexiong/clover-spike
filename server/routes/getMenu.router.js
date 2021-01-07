const { default: Axios } = require('axios');
const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    console.log(`we in getMenu`);
    axios.get(`https://sandbox.dev.clover.com/v3/merchants/${process.env.SMOKIN_MERCH_ID}?${SMOKIN_API_TOKEN}`)
    .then((response) => {
        console.log(response.data);
        res.send(response.data)
    })
})

module.exports = router;