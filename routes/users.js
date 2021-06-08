const express=require('express');
const router = express.Router();

const {getUsersHandler} = require('../services/handlers/get-users-handler');

router.get('/', getUsersHandler);

module.exports = router;
