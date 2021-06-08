const express=require('express');
const app = express();
const config = require('./config/config');
const peopleRouter = require('./routes/people');
const usersRouter = require('./routes/users');
const nunjucks = require('nunjucks');
const PORT = config.port || 3000;

nunjucks.configure('pages', {
    autoescape: true,
    express: app
});

app.use(express.static(__dirname + '/'));

app.use('/people', peopleRouter);
app.use('/users', usersRouter);

app.listen(PORT, (err)=> {
    console.log(`up & running on port ${PORT}`);
});
