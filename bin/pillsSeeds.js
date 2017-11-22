const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pillsDB', {useMongoClient: true});
const Pill = require('../models/pill');

Pill.collection.drop();

const pillData = [

{ title: '¿Qué es AJAX?',
description: 'AJAX es una técnica utilizada por desarrolladores web para crear aplicaciones capases de mantener comunicación asíncrona con el servidor. ',
category: 'AJAX',
link: 'https://youtu.be/dN1mQ7eGfTc',
language: 'Spanish',
comments: []
},

{ title: 'Bubble Sort Algorithm',
description: 'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. ',
category: 'Algorithms',
link: 'https://youtu.be/e19f__xnXWA',
language: 'English',
comments: []
},

{ title: 'Arrow Functions in JavaScript',
description: 'Arrow functions are a new feature in JavaScript ES2015 which reduce function scaffolding, while tackling this binding, allowing you to be more productive with less code. This video provides an overview of the arrow function syntax. ',
category: 'Functions',
link: 'https://youtu.be/mqUZDkyrDkM',
language: 'English',
comments: []
},
];

Pill.create(pill)
.then(pills => {
console.log(pills);
mongoose.connection.close();
})
.catch(err => console.log(err));
