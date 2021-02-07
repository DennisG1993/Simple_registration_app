const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./api/userRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const { message, data } = error;
    res.status(status).json({ message: message, data: data });
})

app.listen(8080);