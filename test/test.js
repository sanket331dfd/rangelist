const assert = require('assert')
const chai = require('chai')
const expect = chai.expect
const RangeList = require("../src/index")

describe('TC1 Test instantiation', function () {
 it('should create a new RangeList object', function () {
    expect(new RangeList()).exist;
    })
});



describe('TC2 Test adding one valid range', function () {
  it('should add range', function () {
     let r = new RangeList()
     r.add([4,10])
     expect(r.get().length).eq(1)
     })
 });

 describe('TC3 Test adding second valid range', function () {
  it('should add range', function () {
    let r = new RangeList()
    r.add([1,11])
    r.add([3,11])
     expect(r.get().length).eq(2)
     })
 })

 describe('TC4 Test adding invalid range', function () {
  it('should *not* be added', function () {
    let r = new RangeList()
    r.add([3,11])
     r.add([100,1])
     expect(r.get().length).eq(1)
     })
 })


