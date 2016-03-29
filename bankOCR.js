// Solution for KataBankOCR
// Copyright (c) 2016 Amira Hailemariam
// Coding challenge for TestDouble

function readFile(event) {

  var files = event.target.files; // FileList objects
  var file = files[0];

  if (!file.type.match('text.*')) {
    return;
  }

  var reader = new FileReader();

  // Load event is fired once the content from
  // the file is available.
  reader.onload = function(event){
    var fileContent = event.target.result; // String object
    var accountNumbers = formatEntries(fileContent, renderNumbers);
    console.log(accountNumbers);
  };

  reader.readAsText(file);
}

function formatEntries(content, callback) {
  // i.e. [["entry1line1"], [entry1line2], [entry1line3], [""], [entry2line1], …]
  var lines = content.split('\n');

  // i.e. [[["line1"], ["line2"], ["line3"]], […], …]
  var entries = [];
  var entry = [];
  for (i = 0; i < lines.length; i++) {
    var linesInOneEntry = 3;

    if (entry.length == linesInOneEntry) {
      entries.push(entry);
      entry = [];
    }

    // Don't include the blank lines.
    if (lines[i].length !== 0) {
      entry.push(lines[i]);
    }
  }

  callback(entries);
}

function renderNumbers(entries) {
  var accountNumbers = [];

  for (i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var accountNumber = [];

    // NOTE: The following only (theoretically) works for rendering the first digit.
    // What after that? Remove the characters that make up that digit
    // and continue? Would spacing become an issue?

    //  _
    //  _|
    // |_
    //
    if (entry[0][2] == "|") {
      number.push(2);
      continue;
    }

    //  _      _      _
    // |_| or |_  or | |
    // |_|    |_|    |_|
    //
    if (entry[0][0] === ""  && entry[1][0] == "|" && entry[2][0] == "|") {
      // 8 or 6
      if (entry[0][1] == "_" && entry[1][1] == "_" && entry[2][1] == "_") {
        // 8
        if (entry[1][2] == "|" && entry[2][2] == "|") {
          number.push(8);
          continue;
        // 6
        } else if (entry[1][2] === "" && entry[2][2] == "|") {
          number.push(6);
          continue;
        }
      // 0
      } else {
        number.push(0);
        continue;
      }
    }

    //  _      _
    // |_  or |_| or |_|
    //  _|     _|      |
    //
    if (entry[0][0] === "" && entry[1][0] == "|") {
      // 5
      if (entry[0][1] == "_" && entry[1][1] == "_" && entry[2][1] == "_") {
        number.push(5);
        continue;
      }

      // 9
      if (entry[0][1] == "_" && entry[1][1] == "_" &&
          entry[2][1] == "|" && entry[2][2] == "|") {
        number.push(9);
        continue;
      }

      // 4
      if (entry[1][1] == "_" && entry[2][1] == "|" && entry[2][2] == "|") {
        number.push(4);
        continue;
      }
    }

    //       _      _
    //  | or  | or  _|
    //  |     |     _|
    //
    if (entry[0][0] === "" && entry[0][1] === "" && entry[0][2] === "") {
      // either 7 or 3
      if (entry[0][1] == "_" && entry[1][2] == "|" && entry[2][2] == "|") {
        // 3
        if (entry[1][1] == "_" && entry[2][1] == "_") {
          number.push(3);
          continue;
        // 7
        } else {
          number.push(7);
          continue;
        }
      }

      // 1
      if (entry[1][1] == "|" && entry[2][1] == "|") {
        number.push(1);
        continue;
      }
    }

    accountNumbers.push(accountNumber);
  }

  return accountNumbers;
}
