const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const routes = require('./routes/api');
const html = require('./routes/html');

const app = express();
const PORT = 9000;


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


app.listen(PORT, () => console.log(`API is listening on port ${PORT}`));