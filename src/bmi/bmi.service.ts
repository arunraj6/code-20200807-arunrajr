module.exports = class BMIService {

    //#region MAIN METHODS/ VARIABLES

    totalOverWeight = 0;

    /**
    * Calculate BMI per Person and print the result
    * 
    * @param inputData All Person record from the input JSON
    * @returns void, Empty result
    * @returns Exception, @see [Base Exceptions](https://docs.nestjs.com/exception-filters#base-exceptions)
    */
    calculateBMI(inputData) {
        try {
            if (this.isValidInput(inputData)) {
                const bmi = this.getBMI(inputData?.value);
                const observations = this.getCategoryAndHealthRisk(bmi);
                console.log(bmi, '\t', observations[0], '\t', observations[1]);
            } else {
                this.logIssues('Bad Input!');
                throw new Error('Bad Input!');
            }
        } catch (error) {
            throw error;
        }
    }

    //#endregion

    //#region HELPER METHODS

    isValidInput(value) {
        // Check for the valid input from the JSON
        return (value && Object.keys(value).length > 0) ? true : false;
    }

    getBMI(person) {
        // Formula: BMI(kg/m ) = mass(kg) / height(m)
        return person?.WeightKg / ((person?.HeightCm / 100) * 2);
    }

    getCategoryAndHealthRisk(bmi) {
        let category = '';
        let healthRisk = '';

        // Logic to identify the Category and Health Risk based on bmi
        if (bmi <= 18.4) {
            category = 'Underweight';
            healthRisk = 'Malnutrition risk';
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
            healthRisk = 'Low risk';
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
            healthRisk = 'Enhanced risk';
            this.totalOverWeight++;
        }
        else if (bmi >= 30 && bmi <= 34.9) {
            category = 'Moderately obese';
            healthRisk = 'Medium risk';
        }
        else if (bmi >= 35 && bmi <= 39.9) {
            category = 'Severely obese';
            healthRisk = 'High risk';
        }
        else if (bmi >= 40) {
            category = 'Very severely obese';
            healthRisk = 'Very high risk';
        } else {
            this.logIssues('Bad Input from getCategoryAndHealthRisk()');
        }
        return [category, healthRisk];
    }

    logIssues(issue) {
        // A common logic to log issues
        console.log(issue)
    }

    buildHeader() {
        console.log('BMI Range\t\t Category\t Risk');
        console.log('------------------------------------------------------');
    }

    //#endregion

}