"use strict"

/** A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
    A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

Additional Assumptions Made

1. Should be integer-based (any other type will be discarded)
2. Should be ascending (descending will be discarded)
3. May be overlapping as well
4. May contain duplicates
5. Empty ranges will be discarded

*/

class RangeList {
  constructor() {
    this.list = new Array()
  }

  /**
    Adds a range to the list
    @param {Array<number>} range - Array of two integers that specify beginning and end of range.
  */
  add(range) {
    if ((typeof range[0] != "number") ||
        (typeof range[1] != "number")) {
          return

    }

    if (range[1] <= range[0]) {
      return
    }

    let start = range[0]
    let end = range[1]
    // find the range that 'start' is in

    if (range[1] > range[0]) {
      this.list.push(range)
    }
  }

  /**
    Removes a range from the list
    @param {Array<number>} range - Array of two integers that specify beginning and end of range.
  */
  remove(range) {
    // TODO: implement this
  }

  /**
   * Prints out the list of ranges in the range list
  */
  print() {
    let s = ""
    this.list.forEach((e) => {
      s += "[" + e[0] + ", " + e[1] + ") "
    })
    //s = s.substring(0, s.length - 2)
    console.log(s.trim())
  }

  /**
   *
   */
  get() {
    return this.list
  }
}


module.exports = RangeList;
