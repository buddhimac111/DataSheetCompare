const express = require("express");
const app = express();
var xlsx = require("xlsx");
const cors = require("cors");
const upload = require("express-fileupload");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(upload());

app.post("/uploadFiles", (req, res) => {
  if (req.files) {
    // console.log(req.files);
    var file1 = req.files.file1;
    var file2 = req.files.file2;

    console.log("File2" + file2.name);
    console.log("File1" + file1.name);

    file1.mv("./docs/" + file1.name, function (err) {
      if (err) {
        res.send(err);
      } else {
        console.log("File 1 uploaded");
      }
    });

    file2.mv("./docs/" + file2.name, function (err) {
      if (err) {
        res.send(err);
      } else {
        console.log("File 2 uploaded");
      }
    });

    let data1 = [];
    let data2 = [];

    try {
      const workbook = xlsx.readFile("docs/" + file1.name);
      const workbook2 = xlsx.readFile("docs/" + file2.name);

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

      let equalIdArray = [];
      let notEqualIdArray = [];
      let jsonArray = {};

      for (let item of data2) {
        for (let item2 of data1) {
          if (item.id === item2.id) {
            equalIdArray.push(item.id);
          }
        }
      }

      for (let item of data2) {
        for (let item2 of data1) {
          if (item.id !== item2.id) {
            notEqualIdArray.push(item.id);
            break;
          }
        }
      }

      jsonArray = {
        equal: equalIdArray,
        not_eqaul: notEqualIdArray,
      };

      res.send(jsonArray);
    } catch (err) {
      console.log(err);
    }

    
  }
});

app.get("/uploadFiles", (req, res) => {
  let fileName1 = req.query.file1;
  let fileName2 = req.query.file2;
  let data1 = [];
  let data2 = [];

  try {
    const workbook = xlsx.readFile("docs/" + fileName1 + ".xlsx");
    const workbook2 = xlsx.readFile("docs/" + fileName2 + ".csv");

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

    let equalIdArray = [];
    let notEqualIdArray = [];
    let jsonArray = {};

    for (let item of data2) {
      for (let item2 of data1) {
        if (item.id === item2.id) {
          equalIdArray.push(item.id);
        }
      }
    }

    for (let item of data2) {
      for (let item2 of data1) {
        if (item.id !== item2.id) {
          notEqualIdArray.push(item.id);
          break;
        }
      }
    }

    jsonArray = {
      equal: equalIdArray,
      not_eqaul: notEqualIdArray,
    };

    res.send(jsonArray);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
