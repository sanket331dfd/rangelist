const assert = require('assert');
const chai = require('chai')
const expect = chai.expect;
const RangeList = require("../src/index");

describe('Test instantiation', function () {
 it('should create a new RangeList object', function () {
    expect(new RangeList()).exist;
    });
});