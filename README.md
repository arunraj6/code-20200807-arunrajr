# BMI Calculator

Application to calculate the Body Mass Index (BMI).

## Description

Calculate the BMI for a given set of input from `src/bmi/person.json` here.

## Deployment Pipeline

Used <b>GitHub Actions Workflows</b> to setup the pipeline `.github/workflows/main.yaml` , this includes

    - Package installation
    - Test methods execution
    - Finding the code coverage
    - Building the application
    - Server deployment (out of scope)

## Run the Calculator

Use command `npm run start` to run the application.

## Run test methods

Use command `npm test` to run the test methods.

## Run code coverage

Use command `npm test:cov` to run the code coverage.

Can see the code coverage report for business logic in `coverage/src/bmi/index.html`
