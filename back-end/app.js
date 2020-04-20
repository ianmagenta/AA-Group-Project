const { port } = require("./config/index");

const express = require('express');

const userRoute = require('./routes/user');

const app = express();

app.set('view engine', 'pug');

app.use(userRoute);

app.listen(port, () => {
    console.log(`Listening for requests on port ${port}...`);
});
