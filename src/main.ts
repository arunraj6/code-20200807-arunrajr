const fs = require('fs');
const StreamArray = require('stream-json/streamers/StreamArray'); // To process huge JSON files while requiring a minimal memory

const jsonStream = StreamArray.withParser();
fs.createReadStream('src/input/person.json').pipe(jsonStream.input); // To read the input JSON data

jsonStream.on('data', ({ key, value }) => {
    console.log(key, value);
});

jsonStream.on('end', () => {
    console.log('All Done');
});