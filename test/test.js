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

 describe('TC6 Check printed format is as expected', function () {
  let r = new RangeList()
  r.add([1,4])
  r.add([5,10])
  it('should print as [1, 4) [5, 10)', function() {
    checkConsole("[1, 4) [5, 10)", r)
  })
 })

 describe('TC7 partial overlap', function () {
  let r = new RangeList()
  r.add([1,4])
  r.add([3,10])
  it('should combine into one range', function() {
    checkConsole("[1, 10)", r)
  })
 })


 describe('TC8 when we add a range that is smaller than existing ones', function () {
  let r = new RangeList()
  r.add([10,40])
  r.add([5,9])
  r.add([1,2])
  it('should add at the beginning of list', function() {
    checkConsole("[1, 2) [5, 9) [10, 40)", r)
  })
 })

 describe('when we add a range that does not overlap but is in between', function () {
  let r = new RangeList()
  r.add([45,56])
  r.add([100,900])
  r.add([90,95])
  it('should add a new item in middle of list', function() {
    checkConsole("[45, 56) [90, 95) [100, 900)", r)
  })
 })


 describe('when we add a range that completely overlaps', function () {
  let r = new RangeList()
  r.add([-3, 10])
  r.add([5,9])
  r.add([1,2])
  it('should show the superset', function() {
    checkConsole("[-3, 10)", r)
  })
 })


 describe('given [1, 5) [10, 21) we add 3,8', function () {
  let r = new RangeList()
  r.add([1, 5])
  r.add([10, 21])
  r.add([3,8])
  it('should consolidate first one', function() {
    checkConsole("[1, 8) [10, 21)", r)
  })
 })


 describe('given [1, 8) [10, 21) try to remocve 10,10', function () {
  let r = new RangeList()
  r.add([1, 8])
  r.add([10, 21])
  r.remove([10, 10])
  it("no change", function() {
    checkConsole("[1, 8) [10, 21)", r)
  })
 })

 describe('given [1, 8) [10, 21) [30, 34) try to remocve 10,21', function () {
  let r = new RangeList()
  r.add([1, 8])
  r.add([10, 21])
  r.add([30, 34])
  r.remove([10, 21])
  it('removes it', function() {
    checkConsole("[1, 8) [30, 34)", r)
  })
 })

 describe('given [1, 8) [10, 21) [30, 34) try to remocve 8,15', function () {
  let r = new RangeList()
  r.add([1, 8])
  r.add([10, 21])
  r.add([30, 34])
  r.remove([8, 15])
  it('removes it', function() {
    checkConsole("[1, 8) [16, 21) [30, 34)", r)
  })
 })

