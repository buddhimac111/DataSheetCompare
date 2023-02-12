"use strict";

var xlsx = require("xlsx");

var workbook = xlsx.readFile("docs/VA-sheet.xlsx");
var worksheet = workbook.Sheets[workbook.SheetNames[0]];

for (var i = 5; i < 148; i++) {
  var name = worksheet["A1".concat(i)].v;
  console.log({
    AMZ_ID: name
  });
}