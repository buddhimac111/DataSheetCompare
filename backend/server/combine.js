const express = require("express");
const cors = require("cors");
var xlsx = require("xlsx");
var fs = require("fs");
const fileUpload = require("express-fileupload");
var path = require("path");

const app = express();
app.use(cors());
app.use(fileUpload());

const sourceDir = "uploads";
let fileName1 = "";
let fileName2 = "";

function readFileToJson(filename) {
  var wb = xlsx.readFile(filename, { cellDates: true });
  var firstTabName = wb.SheetNames[0];
  var ws = wb.Sheets[firstTabName];
  var data = xlsx.utils.sheet_to_json(ws);
  return data;
}

app.get("/", (req, res) => {
  res.render("upload");
});

app.post("/upload", (req, res) => {
  const files = req.files;

  if (!files) return res.status(400).send("No files were uploaded.");

  files.excel.forEach((file) => {
    file.mv(`./uploads/${file.name}`, (err) => {
      if (err) return res.status(500).send(err);
    });
  });

  console.log("Files uploaded!");
  res.redirect("https://datasheets.onrender.com/getimages");
});

app.get("/getimages", (req, res) => {
  var targetDir = path.join(__dirname, sourceDir);
  var filesDir = fs.readdirSync(targetDir);

  var combinedData = [];

  filesDir.forEach(function (file) {
    var fileExtension = path.parse(file).ext;
    if (fileExtension === ".csv") {
      var fullFilePath = path.join(targetDir, file);
      var data = readFileToJson(fullFilePath);
      combinedData = combinedData.concat(data);
    }
  });

  console.log(combinedData.length);

  var newWB = xlsx.utils.book_new();
  var newWs = xlsx.utils.json_to_sheet(combinedData);
  xlsx.utils.book_append_sheet(newWB, newWs, "Data");

  xlsx.writeFile(newWB, "uploads/newCombinedData.xlsx");

  fileName1 = "VA-sheet.xlsx";
  fileName2 = "newCombinedData.xlsx";
  console.log("Done");

  res.redirect("http://localhost:3000/results");
});

app.get("/getresult", (req, res) => {
  const uploadPath = './uploads/';

  let data1 = [];
  let data2 = [];

  try {
    const workbook = xlsx.readFile("uploads/" + fileName1);
    const workbook2 = xlsx.readFile("uploads/" + fileName2);

    const sheetNames = workbook.SheetNames;
    const sheetNames2 = workbook2.SheetNames;

    for (let i = 0; i < sheetNames2.length; i++) {
      const arr = xlsx.utils.sheet_to_json(workbook2.Sheets[sheetNames2[i]]);

      arr.forEach((res) => {
        data2.push(res["Order ID"]);
      });
    }

    console.log(data2);

    for (let i = 0; i < sheetNames.length; i++) {
      const arr = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[i]]);

      arr.forEach((res) => {
        data1.push(res["AMZ Order ID"]);
      });
    }

    console.log(data1);

    let equalIdArray = [];
    let notEqualIdArray = [];
    let jsonArray = {};

    for (let item of data2) {
      if (data1.includes(item)) {
        equalIdArray.push(item);
      } else {
        notEqualIdArray.push(item);
      }
    }
    //delete tempory uploaded files from server
    fs.readdir(uploadPath, (err, files) => {
      if (err) throw err;
    
      for (const file of files) {
        fs.unlink(`${uploadPath}${file}`, err => {
          if (err) throw err;
          console.log(`Deleted file: ${file}`);
        });
      }
    });
    // console.log("-----------------------------------------------------");
    let uniqueequalIdArray = [...new Set(equalIdArray)];
    // console.log(uniqueequalIdArray);
    // console.log("-----------------------------------------------------");
    let uniquenotEqualIdArray = [...new Set(notEqualIdArray)];
    // console.log(uniquenotEqualIdArray);
    // console.log("-----------------------------------------------------");
    jsonArray = {
      equal: uniqueequalIdArray,
      not_eqaul: uniquenotEqualIdArray,
    };

    console.log(jsonArray);
    res.send(jsonArray);
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
