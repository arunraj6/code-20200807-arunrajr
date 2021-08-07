const BMIServiceTest = require('./bmi.service.ts')
const bmiServiceTest = new BMIServiceTest();

test('adds properly', () => {
    expect(bmiServiceTest.calculateBMI(1, {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96
    }));
});