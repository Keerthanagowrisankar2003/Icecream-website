const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myfirstcd', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected successfully');
  })
  .catch((error) => {
    console.log('Connection failed:', error);
  });

