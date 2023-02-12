var xlsx = require("xlsx");
var workbook = xlsx.readFile("docs/VA-sheet.xlsx");
var workbook2 = xlsx.readFile("docs/01-Aug-2022_to_14-Oct-2022-1-1.csv");

let data1 = [];
let data2 = [];
const sheetNames = workbook.SheetNames;
const sheetNames2 = workbook2.SheetNames;

for (let i = 0; i < sheetNames.length; i++) {
  const arr = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[i]]);

  arr.forEach((res) => {
    data1.push({
      id: res["AMZ Order ID"],
      // supplier: res["Supplier"],
    });
  });
}

for (let i = 0; i < sheetNames2.length; i++) {
  const arr = xlsx.utils.sheet_to_json(workbook2.Sheets[sheetNames[i]]);

  arr.forEach((res) => {
    data2.push({
      id: res["Order ID"],
      // supplier: res["Supplier"],
    });
  });
}

/* console.log(data1);
console.log(data2); */

/* function compare(file1, file2) {
  for (let item of file1) {
    if (file2.find((item2) => item2.id === item.id)) {
      return item.id;
    }
  }
} */

let array = [];

/* for (let item of data1) {
  for (let item2 of data2) {
    if (item.id == item2.id) {
      array.push(item.id);
    }
  }
} */

for (let item of data2) {
  for (let item2 of data1) {
    if (item.id == item2.id) {
      array.push({
        id: item.id
      });
    }
  }
}

console.log(array);
