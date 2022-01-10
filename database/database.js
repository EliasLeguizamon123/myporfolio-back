const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected correctly'))
    .catch(err => console.log(err));