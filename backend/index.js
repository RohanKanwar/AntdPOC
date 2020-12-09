const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const user = require('./routes/api/User');

app.use(cors())
app.use(bodyParser.json());
const mongoURL = 'mongodb://localhost:27017/antdpoc';
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(err => console.error('connection err', err))

app.use('/api/user/', user)

const port = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "test")
  app.listen(port, () => console.log(`server is listening on port ${port}`));

module.exports = app;