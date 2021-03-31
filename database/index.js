const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wedding', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open' , () => {
  console.log('database ready');
});

const registrationSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: true
  },
  vegetarian: Boolean,
  snail: Boolean,
  streetOne: String,
  streetTwo: String,
  cityState: String,
  zip: String
});

const Guest = mongoose.model('Guest', registrationSchema);

const addGuest = (formObj, cb) => {
  Guest.create(formObj)
    .then((data) => {
      cb(null, data)
    })
    .catch((error) => {
      cb(error);
    });
};

const getGuests = (cb) => {
  Guest.find()
    .then((data) => {
      cb(null, data);
    })
    .catch((error) => {
      cb(error);
    });
};

module.exports = {
  addGuest,
  getGuests
};