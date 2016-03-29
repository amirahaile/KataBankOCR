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
    var entries = formatEntries(fileContent);
    console.log(entries);
  };

  reader.readAsText(file);
}

function formatEntries(content) {
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

  return entries;
}

function renderNumbers(entries) {
  var accountNumbers = [];

  
}
