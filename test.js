const os = require('os');
const path = require('path');

const { Main } = require('./app.js');

const testStore = new Main({
    path: path.join(os.homedir(), 'tempStore.json'),
    name: 'Temp JSONStore'
});

console.log('Creating item...');
testStore.create('test', true);
console.log('Done\nGetting item...');
console.log(testStore.get('test'), 'Creating another item...');
testStore.create('test2', 'oh, hello!');
console.log('Done\nGetting item...')
console.log(testStore.get('test2'), 'oh hi!\n oh i forgot, another one');
testStore.create('me', {
    name: [
        "Shehab",
        "Ali",
        "Tweel"
    ],
    age: 11,
    loves: [
        "Code",
        "Dream",
        "Math",
        "Apple",
        "Google",
        "Computers",
        "Floppy disks"
    ],
    hates: [
        "Dumb ads",
        "Homework",
        "HELL"
    ],
    stuff: [
        "Laptops",
        "Huawei",
        "iPhone 7 Plus (Damaged)",
        "Raspberry Pi 3 B+",
        "Floppy disks"
    ],
    birth: new Date('January 21, 2009')
});
console.log('Done\nGetting item...');
console.log(testStore.get('me'), 'Oops! Need to delete that!');
testStore.remove('me');
console.log('Done\nYet another twos');
testStore.create('json', {
    'test': 'hello!'
});
testStore.create('jsonp', {
    test: 'You still see me i\'m in json but i was in a freaking, JSONP'
});
console.log('Done\nGetting items...');
console.log(testStore.get('json'), testStore.get('jsonp'), 'Showing the entire json!!!');
console.log(testStore.json, 'Ok. Time to push that reset button! in, 0 miliseconds');
testStore.reset();
console.log('Boom! All gone! Look At this!', testStore.json, 'It\'s freaking empty! Wow!\n It Worked!');