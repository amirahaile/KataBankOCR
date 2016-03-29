// Test file for KataBankOCR
// Copyright (c) 2016 Amira Hailemariam
// Coding challenge for TestDouble

/*jshint multistr: true */

var expect = chai.expect;
var assert = require('assert');

var string = "  _  _     _  _  _  _  _\n| _| _||_||_ |_   ||_||_|\n||_  _|  | _||_|  ||_| _|\n \
  _  _     _  _  _  _  _\n| _| _||_||_ |_   ||_||_|\n||_  _|  | _||_|  ||_| _|";

describe('formatEntries()', function(){
  it ('returns an array with several sub-arrays', function(){
    var result = formatEntries(string);

    assert(Array.isArray(result), "The array holding all the entries.");
    assert(Array.isArray(result[0]), "The array holding the first entry.");
    assert(Array.isArray(result[0][0]), "The array holding the first entry's first line.");
    assert(Array.isArray(result[0][1]), "The array holding the first entry's second line.");
    assert(Array.isArray(result[0][2]), "The array holding the first entry's third line.");
    assert(Array.isArray(result[1]), "The array holding the second entry.");
  });

  it ('returns a string inside of those sub-arrays', function(){
    var result = formatEntries(string);

    for (i = 0; i < result.length; i++) {
      for (j = 0; j < result[i].length; j++) {
        assert(String.isString(result[i][j]));
      }
    }
  });

  it ('removes the blank line that separates the entries', function(){
    var result = formatEntries(string);
    var noBlank = true;

    for (i = 0; i < result.length; i++) {
      for (j = 0; j < result[i].length; j++) {
        if (result[i][j].empty()) {
          noBlank = false;
        }
      }
    }

    assert(noBlank);
  });
});
