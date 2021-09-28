const express = require('express')
const router = express.Router()

router.get('/users', require('./routes/users'));

module.exports = router