const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mariadb = require('./database/connect/mariadb');
const app = express();

require('dotenv').config();
mariadb.connect();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('port', process.env.SERVER_PORT);
app.listen(app.get('port'), ()=>{
    console.log('Express server listening on port ' + app.get('port'));
});