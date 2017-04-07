const chai = require('chai');
const expect = chai.expect;

const recursiveMe = require('../recursive-factorial.js');

describe('recursiveMe', () => {
  it('should be a function ', function() {
    expect(recursiveMe).to.be.a('function');
  });
  it('should find the factorial', () => {
    expect(recursiveMe(4)).to.be.equal(24);
    expect(recursiveMe(10000)).to.be.equal(Infinity);
  });
  it('should only be numbers', () => {
    expect(recursiveMe('4')).to.be.equal(false);
  });

});