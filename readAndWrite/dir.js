const fs = require("fs");

// creating a directory

if (!fs.existsSync("./new")) { // check if file exists
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
}
if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory removed");
  });
}

