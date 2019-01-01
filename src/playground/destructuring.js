console.log('destructing  app');

const person = {
    name: 'Gokul',
    age: 28,
    location: {
        city: 'Bangalore',
        temp: 20
    }
};

const { name = 'Anonymous', age } = person;
const { city, temp: temperature = 11 } = person.location;

const res = `${name} is ${age}

It's ${temperature} in ${city}`;

console.log(res);



const book = {
    title: 'This is my life',
    author: 'Gokul',
    publisher: {
        name: 'Gklsan'
    }
};

const { name: publisherName = 'Self-published' } = book.publisher;


console.log(publisherName);