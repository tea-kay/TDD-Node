// Max numbers
//[[2,5,7,9], [11,23,15,21], [23, 26, 28, 29], [100, 101, 109, 500]]

// [9, 23, 29, 500]

const findMaxNumber = require('./index');
const assert = require('assert');

describe('Testing findMaxNumber', function() {

  it('returns an array', function() {
    const result = findMaxNumber([[2,5,7,9], [11,23,15,21], [23, 26, 28, 29], [100, 101, 109, 500]]);
    assert.ok(Array.isArray(result));
  });

  it('returns an array with a length of 4', function() {
    const result = findMaxNumber([[2,5,7,9], [11,23,15,21], [23, 26, 28, 29], [100, 101, 109, 500]]);
    assert.equal(result.length, 4);
  });

  it('returns an array with 9, 23, 29, 500', function() {
    const result = findMaxNumber([[2,5,7,9], [11,23,15,21], [23, 26, 28, 29], [100, 101, 109, 500]]);
    assert.deepEqual(result, [9, 23, 29, 500])
  });

});
