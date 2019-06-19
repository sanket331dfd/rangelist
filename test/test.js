const assert = require('assert');
const chai = require('chai')
const expect = chai.expect;
const RangeList = require("../src/index");

describe('Test instantiation', function () {
 it('should create a new RangeList object', function () {
    expect(new RangeList()).exist;
    });
});

describe('Test valid add', function () {
  it('should add a range', function () {
     let r = new RangeList()
     r.add([4,10])
     expect(r.get().length).eq(1)
     });
 });