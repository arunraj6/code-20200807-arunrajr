module.exports = class BMIService {
    //#region PUBLIC METHODS

    /**
    * Calculate BMI per Person and print the result
    * 
    * @param key is the array-index
    * @param value Each Person record from the input
    * @returns void, Empty result
    * @returns Exception, @see [Base Exceptions](https://docs.nestjs.com/exception-filters#base-exceptions)
    */
    calculateBMI(key: number, value: any) {
        try {
            console.log(key, value);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //#endregion

    //#region PRIVATE METHODS

    //#endregion
}