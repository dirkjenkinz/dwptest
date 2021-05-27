const express=require('express');
const router = express.Router();

const {getPeopleHandler} = require('../services/handlers/get-people-handler');

router.get('/', getPeopleHandler);

module.exports = router;