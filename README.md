# Given Problem

```js
// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

/**
*

- NOTE: Feel free to add any extra member variables/functions you like.
*/

class RangeList {
/**

Adds a range to the list

@param {Array<number>} range - Array of two integers that specify beginning and end of range.
*/
add(range) {
// TODO: implement this
}

/**

Removes a range from the list

@param {Array<number>} range - Array of two integers that specify beginning and end of range.
*/
remove(range) {
// TODO: implement this
}

/**

- Prints out the list of ranges in the range list
*/
print() {
// TODO: implement this
}
}

// Example run
const rl = new RangeList();

rl.add([1, 5]);
rl.print();
// Should display: [1, 5)

rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)

rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)

rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)
```

# Additional Assumptions Made

1. Should be integer-based (any other type will be discarded)
2. Should be ascending (descending will be discarded)
3. May be overlapping as well
4. May contain duplicates
5. Empty ranges will be discarded

# Test Results

```
npm test

> rangelist@1.0.0 test C:\Users\drpal\rangelist
> mocha



  TC1 Instantiation
    √ should create a new RangeList object

  TC2 Adding one valid range
    √ should add range

  TC3 Adding second valid range
    √ should add range

  TC4 Adding range reversed
    √ should *not* be added

  TC5 Adding non-numeric
    √ should *not* be added

  TC6 Check printed format is as expected
[1, 4) [5, 10)
    √ should print as [1, 4) [5, 10)

  TC7 partial overlap
[1, 10)
    √ should combine into one range

  TC8 when we add a range that is smaller than existing ones
[1, 2) [5, 9) [10, 40)
    √ should add at the beginning of list

  when we add a range that does not overlap but is in between
[45, 56) [90, 95) [100, 900)
    √ should add a new item in middle of list

  when we add a range that completely overlaps
[-3, 10)
    √ should show the superset

  given [1, 5) [10, 21) we add 3,8
[1, 8) [10, 21)
    √ should consolidate first one

  given [1, 8) [10, 21) try to remocve 10,10
[1, 8) [10, 21)
    √ no change

  given [1, 8) [10, 21) [30, 34) try to remocve 10,21
[1, 8) [30, 34)
    √ removes it

  given [1, 8) [10, 21) [30, 34) try to remocve 8,15
[1, 8) [16, 21) [30, 34)
    √ removes it

  given [1, 8) [10, 21) [30, 34) try to remocve 2,15
[1, 2) [16, 21) [30, 34)
    √ removes it

  given [1, 8) [10, 21) [30, 34) try to remove 2,32
[1, 2) [33, 34)
    √ removes it

  given [1, 8) [10, 21) [30, 34) try to remove -3,32
[33, 34)
    √ removes it


  17 passing (53ms)
  
  ```
