module.exports = class BMIService {
    //#region PUBLIC METHODS

    /**
    * Calculate BMI per Person and print the result
    * 
    * @param inputData All Person record from the input JSON
    * @returns void, Empty result
    * @returns Exception, @see [Base Exceptions](https://docs.nestjs.com/exception-filters#base-exceptions)
    */
    calculateBMI(inputData) {
        try {
            if (this.isValidateInput(inputData)) {
                const totalCount = inputData.length;
                for (let i = 0; i < totalCount; i++) {
                    const person = inputData[i]?.value;
                    const bmi = this.getBMI(person);
                    console.log(bmi);
                }
            } else {
                console.log('Bad Input!');
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //#endregion

    //#region HELPER METHODS

    isValidateInput(value) {
        return (value && value.length > 0) ? true : false;
    }

    getBMI(person) {
        // Formula: BMI(kg/m ) = mass(kg) / height(m)
        return person?.WeightKg / ((person?.HeightCm / 100) * 2);
    }

    //#endregion
}