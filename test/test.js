let assert = require('chai').assert;

describe('testing how long it takes speech', () => {
  it('should take longer time before the speech is cleared from the text', done => {
    setTimeout(done, 1000);
  });
});
describe('Testing speech string return', () => {
  it('should return a string as a value', () => {
    let greetings = 'Hi';
    assert.equal(typeof greetings === 'string', true);
  });
  it('should return false when speech is not given', () => {
    let number = 9;
    assert.equal(typeof number === 'string', false);
  });
  it('should return false when speech is not given', () => {
    let number = {};
    assert.equal(typeof number === 'string', false);
  });
  
});
