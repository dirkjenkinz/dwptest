require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    getPeopledataUrl: 'https://dwp-techtest.herokuapp.com/city/London/users',
    getUsersUrl: 'https://dwp-techtest.herokuapp.com/users'
};