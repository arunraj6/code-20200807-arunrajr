const fs = require('fs');
const StreamArray = require('stream-json/streamers/StreamArray'); // To process huge JSON files while requiring a minimal memory
const BMIService = require('./bmi/bmi.service.ts'); // Business module

const jsonStream = StreamArray.withParser();
fs.createReadStream('src/bmi/person.json').pipe(jsonStream.input); // To read the input JSON data

const bmiService = new BMIService();
jsonStream.on('data', (key, value) => {
    bmiService.calculateBMI(key, value);
});

jsonStream.on('end', () => {
    console.log('Finished!');
});