const callAPI = require('../api');
const config = require('../../config/config');

const getUsersHandler = async (req, res) => {
    const url = config.getUsersUrl;
    try {
        const response = await callAPI(url);
        console.log(`API call status = ${response[0]}`);
        const long = 51.5074;
        const lat = 0.1278;
        const long50 = (1 / 54.6) * 50;
        const lat50 = (1 / 69) * 50;

        let userList = [];

        for (item = 0; item < response[1].length; item++) {
            let item_lat = response[1][item].latitude;
            let item_long = response[1][item].longitude;
            if (item_long >= long - long50 && long <= long + long50) {
                if (item_lat >= lat - lat50 && lat <= lat + lat50) {
                    userList.push(response[1][item]);
                }
            }
        }
        if (response[0] === 200) {
            res.locals.list = userList;
            res.render('people.html', {heading: 'List of members living in or within 50 miles of London.'});
        } else {
            res.locals.error = response[0];
            res.render('error.html');
        }
    } catch (error) {
        res.locals.error = 500;
        res.render('error.html');
    }
};

module.exports = { getUsersHandler };
