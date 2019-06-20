const assert = require('assert')
const chai = require('chai')
const expect = chai.expect
const RangeList = require("../src/index")
const sinon = require("sinon");

describe('TC1 Instantiation', function () {
 it('should create a new RangeList object', function () {
    expect(new RangeList()).exist;
    })
});


describe('TC2 Adding one valid range', function () {
  it('should add range', function () {
     let r = new RangeList()
     r.add([4,10])
     expect(r.get().length).eq(1)
     })
 });

 describe('TC3 Adding second valid range', function () {
  it('should add range', function () {
      let r = new RangeList()
      r.add([1,11])
      r.add([23,24])
      expect(r.get().length).eq(2)
     })
 })

 describe('TC4 Adding range reversed', function () {
  it('should *not* be added', function () {
      let r = new RangeList()
      r.add([3,11])
      r.add([100,1])
      expect(r.get().length).eq(1)
     })
 })

 describe('TC5 Adding non-numeric', function () {
  it('should *not* be added', function () {
      let r = new RangeList()
      r.add(['a','g'])
      expect(r.get().length).eq(0)
     })
 })

 let checkConsole = function (exp, r) {
  let spy = sinon.spy(console, "log")
  r.print()
  sinon.assert.calledWithExactly(spy, exp)
  spy.restore()
 }

 describe('TC6 Check printed format', function () {
  let r = new RangeList()
  r.add([1,4])
  r.add([5,10])
  it('should print', function() {
    checkConsole("[1, 4) [5, 10)", r)
  })
 })









