const callAPI = require('../../services/api');
const config = require('../../config/config');

const getPeopleHandler = async (req, res) => {
    const url = config.getPeopledataUrl;
    try {
        const response = await callAPI(url);
        console.log(`API call status = ${response[0]}`);
        if (response[0] === 200) {
            res.locals.list = response[1];
            res.render('people.html');
        } else {
            res.locals.error = response[0];
            res.render('error.html');
        }
    } catch (error) {
        res.locals.error = 500;
        res.render('error.html');
    }
};

module.exports = { getPeopleHandler };
