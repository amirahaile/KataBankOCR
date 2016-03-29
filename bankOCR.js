// Solution for KataBankOCR
// Copyright (c) 2016 Amira Hailemariam
// Coding challenge for TestDouble

function readFile(event) {

  var files = event.target.files; // FileList object
  var file = files[0];

  if (!file.type.match('text.*')) {
    return;
  }

  var reader = new FileReader();

  // Load event is fired once the content from
  // the file is available.
  reader.onload = function(event){
    var fileContent = event.target.result;
    console.log(fileContent);
  };

  reader.readAsText(file);
}
