'use strict';
// ********** bring in our requirements **********
const express = require('express');
const logger = require('./middleware/logger')
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const PORT = process.env.PORT || 3001;
// ********** create a express singleton instance **********
const app = express();

// ********** middleware **********
app.use(express.json());
// app.use(logger);

app.get('/', logger, (req, res, next) =>{
res.status(200).send(req.log);
})

app.get('/bad', (req, res, next) => {
  next('we have a bad route');
})

app.use('*', notFound);
app.use(errorHandler);

let startServer = () => {
app.listen(PORT, () => console.log('Example app listening on port 3001!'));
};

module.exports = { startServer, app };
