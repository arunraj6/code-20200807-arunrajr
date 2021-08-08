const BMIServiceTest = require('./bmi.service.ts')
const bmiServiceTest = new BMIServiceTest();

test('invalid input throw exception', () => {
    expect(() => bmiServiceTest.calculateBMI()).toThrow('Bad Input!');
});

test('empty input throw exception', () => {
    expect(() => bmiServiceTest.calculateBMI({})).toThrow('Bad Input!');
});

test('null input throw exception', () => {
    expect(() => bmiServiceTest.calculateBMI(null)).toThrow('Bad Input!');
});

test('calculateBMI method for underweight weight', () => {
    expect(bmiServiceTest.calculateBMI({
        "value": {
            "Gender": "Male",
            "HeightCm": 161,
            "WeightKg": 45
        }
    })).toBe(undefined);
});

test('calculateBMI method for normal weight', () => {
    expect(bmiServiceTest.calculateBMI({
        "value": {
            "Gender": "Male",
            "HeightCm": 180,
            "WeightKg": 77
        }
    })).toBe(undefined);
});

test('calculateBMI method for over weight', () => {
    expect(bmiServiceTest.calculateBMI({
        "value": {
            "Gender": "Male",
            "HeightCm": 171,
            "WeightKg": 96
        }
    })).toBe(undefined);
});

test('calculateBMI method for moderately obese', () => {
    expect(bmiServiceTest.calculateBMI({
        "value": {
            "Gender": "Male",
            "HeightCm": 150,
            "WeightKg": 90
        }
    })).toBe(undefined);
});


test('calculateBMI method for severely obese', () => {
    expect(bmiServiceTest.calculateBMI({
        "value": {
            "Gender": "Male",
            "HeightCm": 150,
            "WeightKg": 110
        }
    })).toBe(undefined);
});

test('calculateBMI method for very severely obese', () => {
    expect(bmiServiceTest.calculateBMI({
        "value": {
            "Gender": "Male",
            "HeightCm": 150,
            "WeightKg": 150
        }
    })).toBe(undefined);
});

test('wrong input prints NAN', () => {
    expect(bmiServiceTest.calculateBMI({
        "value": {
            "Gender": "Male",
            "HeightCm": 0,
            "WeightKg": 0
        }
    })).toBe(undefined);
});

test('buildHeader method to be defined', () => {
    expect(bmiServiceTest.buildHeader()).toBe(undefined);
});

test('logIssues method to be defined', () => {
    expect(bmiServiceTest.logIssues('some message')).toBe(undefined);
});