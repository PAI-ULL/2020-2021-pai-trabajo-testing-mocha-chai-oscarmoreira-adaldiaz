## PAI Lab assignment (lab, class presentation with slides) structure
This directory is organised as follows:

      .
      ├── bib          # Assignment bibliography
      ├── slides       # slides of your presentation
      ├── tests        # Source code for tests
      ├── src          # Source code 

# Testing with Mocha and Chai

## PAI Lab assignment (lab, class presentation with slides) structure

This directory is organised as follows:

.

├── bib # Assignment bibliography

├── slides # slides of your presentation

├── tests # Source code for tests

├── src # Source code

 
## What is Mocha and Chai

Mocha is a framework that allows us to run test and reporting part and Chai is a library that allows us to compare in different ways the result obtained with the expected result

## Mocha and Chai instalation

### Mocha

 Install with npm globally:

` npm install --global mocha `

or as a development unit for your project:

` npm install --save-dev mocha `

### Chai

Install with npm globally:

` npm install --global chai `

or as a development unit for your project:

` npm install --save-dev chai `

## Configurate a test script in the package.json

```javascript

"scripts": {

	"test":  "./node_modules/.bin/mocha --reporter spec"

}

```

## Test Structure

Mocha gives us many possibilities so we will see first the simplest structure to make a test and then we will develop it

### Header

An example header can be the one we see below, where we load the module of the chai library that we are going to use and our program.

```javascript

let  assert = require("chai").assert; // Chai assert module

let  concatenate = require("../src/concatenate"); // Our program

```

### Describe

Describe is a hook that allows us to create related test blocks. We can go nesting describes if we consider it necessary for the structure of our tests.

- The first describes groups the tests that have to do with the assert module

- The second describes groups the test that check the concatenate function

```javascript

describe("Concatenate tests using ASSERT interface from CHAI module: ", function() {

	describe("Check concatenate Function: ", function() {

		it("", function() {}); // First test

		it("", function() {}); // Second test

		it("", function() {}); // Third test

	});

});

``` 

### It

Each is a test that we will perform. We can add as many tests as we want inside a description.

```javascript

it("Check the returned value using: assert.equal(value,'value'): ", function() {

	result = concatenate.concatenate("text");

	assert.equal(result, "text tested");

});

```

### Hooks

This would be the simplest structure to test in Mocha, but Mocha allows us to make use of many more hooks:

-  **Before():** Before is a hook that runs before the first it() or describe()

-  **BeforeEach():** BeforeEach is a hook that run before each it() or describe()

-  **After():** Afert is a hook that runs after all it() or describe()

-  **AfterEach():** Afert is a hook that runs after each it() or describe()

## Ways to run the tests

When we run few tests it is not complicated to check which ones work and which ones do not, but when we have many tests this is complicated. As we find in other frameworks of testing Mocha allows us to use a series of functions to see which test we are going to run and which are not
 
### Function only

The function only allow us to execute only the test or block, that we want. For example:

```javascript

describe.only("Test Block 1", function() {

	it("Test", function() {});

});

describe("Test Block 2", function() {

	it("Test", function() {});

});

describe("Test Block 2", function() {

	it("Test", function() {});

});

```

As you can see in the example if we check this test the only block that would run would be the one that has only. The same thing happens if we apply only to a test

```javascript

describe("Test Block", function() {

	it.only("Test 1", function() {});

	it("Test 2", function() {});

	it("Test 3", function() {});

});

```

### Function skip

The function skip allow us to pass the tests or block, that we want

```javascript

describe.skip("Test Block 1", function() {

	it("Test", function() {});

});

describe("Test Block 2", function() {

	it("Test", function() {});

});

describe("Test Block 2", function() {

	it("Test", function() {});

});

```

As you can see in the example if we check this test all blocks would run less Test Block 1 because it is the one that has skip. The same thing happens if we apply only to a test

```javascript

describe("Test Block", function() {

	it.skip("Test 1", function() {});

	it("Test 2", function() {});

	it("Test 3", function() {});

});

```















