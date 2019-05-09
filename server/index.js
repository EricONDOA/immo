const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/myFonciaBdd').then(() => console.log('Mongoose est connectee Youpi'));

const Users = require('./schemas/user');
const Client = require('./schemas/client');

app.use(bodyParser.json());

app.post('/api/auth', async (req, res) => {
  console.log('----------', req.body);
  const {user, password} = req.body
  const resp = await Users.findOne({user, password});

  console.log(resp);
  // check if this information exist on db
  if(!resp) {
    //user not exist or incorrect credentials
    console.log('Problem with credentials')

  } else {
    // make a session and set user to logged in.
    console.log('login user in');
    res.send(resp);
  }
});

app.get('/api/clients', async (req, res) => {
  "use strict";
  const resp = await Client.find();
  if(resp) {
    res.send(resp);
  }

})
app.listen(1234, () => console.log('Server listenning at 1234'));
