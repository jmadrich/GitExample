const express = require('express');

const application = express();

application.get('*', (req, res, next) => {
    next();
});

application.get('/hello', (req, res, next) => {
    res.status(200).json({
        'msg': 'Hello JEDI\'s'
    });
});

const port = process.env.PORT;


application.listen(port, () => {
    console.log("The magic happens at port " + port);
});