// Test file for KataBankOCR
// Copyright (c) 2016 Amira Hailemariam
// Coding challenge for TestDouble

/*jshint multistr: true */

var assert = require('assert');


describe('formatEntries()', function(){
  var string = "  _  _     _  _  _  _  _\n| _| _||_||_ |_   ||_||_|\n||_  _|  | _||_|  ||_| _|\n \
  _  _     _  _  _  _  _\n| _| _||_||_ |_   ||_||_|\n||_  _|  | _||_|  ||_| _|";
  var result = formatEntries(string);

  it ('returns an array with several sub-arrays', function(){
    assert(Array.isArray(result), "The array holding all the entries.");
    assert(Array.isArray(result[0]), "The array holding the first entry.");
    assert(Array.isArray(result[0][0]), "The array holding the first entry's first line.");
    assert(Array.isArray(result[0][1]), "The array holding the first entry's second line.");
    assert(Array.isArray(result[0][2]), "The array holding the first entry's third line.");
    assert(Array.isArray(result[1]), "The array holding the second entry.");
  });

  it ('returns a string inside of those sub-arrays', function(){
    for (i = 0; i < result.length; i++) {
      for (j = 0; j < result[i].length; j++) {
        assert(String.isString(result[i][j]));
      }
    }
  });

  it ('removes the blank line that separates the entries', function(){
    var noBlank = true;

    for (i = 0; i < result.length; i++) {
      for (j = 0; j < result[i].length; j++) {
        if (result[i][j].length === 0) {
          noBlank = false;
        }
      }
    }

    assert(noBlank);
  });
});

describe('renderNumbers()', function(){
  var entries = [[["  _  _     _  _  _  _  _"],["| _| _||_||_ |_   ||_||_|"],
  ["||_  _|  | _||_|  ||_| _|"]], [["_  _     _  _  _  _  _"],
  ["| _| _||_||_ |_   ||_||_|"], ["||_  _|  | _||_|  ||_| _|"]]];
  var accountNumbers = renderNumbers(entries);

  it ('returns an array with sub-arrays of account numbers', function(){
    assert(Array.isArray(accountNumbers), "The array holding all the account numbers.");
    assert(Array.isArray(accountNumbers[0]), "The first account number.");
    assert(Array.isArray(accountNumbers[1]), "The second account number.");
  });

  it ('should return account numbers that are nine digits', function(){
    var accountNumber = accountNumbers[0];

    assert(Array.isArray(accountNumber), "Best format for Story 2.");
    assert(accountNumber.length == 9);
  });
});
