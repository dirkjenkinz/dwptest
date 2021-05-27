const express=require('express');
const app = express();
const config = require('./config/config');
const router = require('./routes/people');
const nunjucks = require('nunjucks');
const PORT = config.port || 3000;

nunjucks.configure('pages', {
    autoescape: true,
    express: app
});

app.use(express.static(__dirname + '/'));

app.use('/people', router);

app.listen(PORT, (err)=> {
    console.log(`up & running on port ${PORT}`);
});
