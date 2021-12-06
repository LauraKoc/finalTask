const operations = require('../task1')

it('should show biggest number', function () {
  const expectedResult = 17;
  const result = operations.biggerNumber(17, 11);
  if (result !== expectedResult) {
    throw new Error(
      `Expected ${expectedResult}, but got ${result}`
    )
  }
})
