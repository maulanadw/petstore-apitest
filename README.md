# Petstore API Test

This repository contains API testing for the Petstore application using JavaScript. The testing is written using Supertest (JEST) with Mocha as the test runner and Chai as the assertion library.


## Installation

1. Make sure you have Node.js installed on your system.
2. Clone this repository to local directory:

```bash
  git clone https://github.com/maulanadw/petstore-apitest.git
```

3. Navigate to the project directory:

```bash
  cd petstore-apitest
```

4. Install the project dependencies:

```bash
  npm install mocha chai supertest mochawesome
```

## Running the Tests

To run the tests, use the following command:

```bash
  npm run test test/api/<script-test>
```

This command will execute the test cases written in JavaScript using the Mocha test runner, Chai assertion library, and Supertest for making HTTP requests. The test results will be displayed in the console.

## Test Reports

After running the tests, you can generate a detailed test report using the following command:

```bash
  npx mocha --spec test/api/<script-test> --reporter mochawesome
```

## Directory Structure

- `test/`: This directory contains all the test scripts.
- `env.js`: This file contains the configuration settings for the tests, e.g change the API endpoint URL.
- `package.json`: This file contains information about the project and the dependencies used.