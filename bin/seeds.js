const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pillsDB', {useMongoClient: true});
const User = require('../models/user');

User.collection.drop();

const userData = [

{username: 'Yurema',
email: 'yuremarc@gmail.com',
password: 'perromalo',
pills: [],
role: admin
},

{username: 'Fran Rom',
email: 'maildefranz@gmail.com',
password: '1234',
pills: [],
role: admin
},

];

User.create(user)
.then(users => {
console.log(users);
mongoose.connection.close();
})
.catch(err => console.log(err));
