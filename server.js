const express = require('express');

const application = express();

application.get('*', (req, res, next) => {
    next();
});

application.get('/hello', (req, res, next) => {
    res.status(200).json({
        'msg': 'Thomas gij bent een faggot'
    });
});

const port = process.env.PORT;


application.listen(port, () => {
    console.log("The magic happens at port " + port);
});