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

/**
 * r1 is between r2
 * @param {*} r1
 * @param {*} r2
 */
function between(r1, r2) {
  return ((r1[0] >= r2[0]) && (r1[0] <= r2[1]))
}

/**
 * Join if two ranges overlap or are adjoining
 * @param {Array<number>} r1
 * @param {Array<number>} r2
 */
function joinable(r1, r2) {
  // if there is an overlap then
  if (between(r1, r2) || between(r2, r1)) {
    return true
  }
  return false
}

/**
 * r1 begins in r2
 * @param {*} r1
 * @param {*} r2
 */

function begins(r1, r2) {
  if ((r1[0] >= r2[0]) && (r1[0] < r2[1])) { return true }
  return false
}

/**
 * r1 ends in r2
 * @param {*} r1
 * @param {*} r2
 */
function ends(r1, r2) {
  if ((r1[1] >= r2[0]) && (r1[1] < r2[1])) { return true }
  return false
}

/**
 * r1 is superset of r2 (includes equality)
 * @param {} r1
 * @param {*} r2
 */
function superset(r1, r2) {
  return ((r1[0] <= r2[0]) && (r1[1] >= r2[1]))
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
    if ((typeof range[0] != "number") ||
        (typeof range[1] != "number")) {
          return
    }

    if (range[1] <= range[0]) {
      return
    }

    let sr = [] // indices of ranges which we consolidate

    for (let i = 0; i < this.list.length; i++) {
      let e = this.list[i]
      if (joinable(range, e)) {
        sr.push(i) //save index for range to be removed
        range[0] = Math.min(range[0], e[0])
        range[1] = Math.max(range[1], e[1])
      } else {
        // if no more overlaps but previously had overlaps then stop
        if (sr.length != 0) break

        // if the selected range is bigger than us
        // but not overlapping then insert here
        if (e[0] > range[1]) {
          this.list.splice(i, 0, range)
          return
        }
      }
    }

    // remove ranges which are already consolidated
    // and replace with new one
    if (sr.length > 0) {
      this.list.splice(sr[0], sr.length, range)
      return
    }

    this.list.push(range)
  }


  /**
    Removes a range from the list
    @param {Array<number>} range - Array of two integers that specify beginning and end of range.
  */
  remove(range) {
    if ((typeof range[0] != "number") ||
    (typeof range[1] != "number")) {
      return
    }

    if (range[1] <= range[0]) {
      return
    }

    let sr = [] // indices of ranges selected to be removed

    for(let i = 0; i < this.list.length; i++) {
      let e = this.list[i]
      // if we find an exact match or a superset mark to remove it
      if (superset(range, e)) {
        sr.push(i)
      }
      // if range falls within an existing one we need to split the existing one
      else if (begins(range, e) && ends(range, e)) {
        this.list.splice(i, 0, [range[1], e[1]])
        e[1] = range[0]
        return
      }
      // if range begins in an existing one or ends in an exising one we need to modify that
      // existing range
      else if (begins(range, e)) {
        e[1] = range[0]
      }
      else if (ends(range, e)) {
        // we add one since the new beginning is inclusive and should start with an element that still exists
        e[0] = range[1] + 1
        // we can stop iterating since nothing else needs to be checked
        break
      }

    }

    // delete marked items
    if (sr.length > 0) {
      this.list.splice(sr[0], sr.length)
    }

  }

  /**
   * Prints out the list of ranges in the range list
  */
  print() {
    let s = ""
    this.list.forEach((e) => {
      s += "[" + e[0] + ", " + e[1] + ") "
    })
    console.log(s.trim())
  }

  get() {
    return this.list
  }

}


module.exports = RangeList;
