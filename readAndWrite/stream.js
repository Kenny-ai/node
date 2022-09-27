const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(
  path.join(__dirname, "files", "lorem.txt"), { encoding: "utf8" }
);

const ws = fs.createWriteStream(path.join(__dirname, "files", "newLorem.txt"));

// rs.on("data", (dataChunk) => {
//   // console.log(dataChunk)
//   ws.write(dataChunk);
// });

// a more efficient way of doing it
rs.pipe(ws);
