"use strict";

/** A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
    A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)
*/

let toStr = function() {
  return this.list;
}

class RangeList {
  constructor() {
    this.list = new Array()
  }

  /**
    Adds a range to the list
    @param {Array<number>} range - Array of two integers that specify beginning and end of range.
  */
  add(range) {
    this.list.push(range)
  }

  /**
    Removes a range from the list
    @param {Array<number>} range - Array of two integers that specify beginning and end of range.
  */
  remove(range) {
    // TODO: implement this
  }

  /**
    Prints out the list of ranges in the range list
  */
  print() {
    console.log(toStr());
  }

  get() {
    return this.list
  }
}


module.exports = RangeList;
