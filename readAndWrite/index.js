// const fs = require("fs");
const path = require("path");

const fsPromises = require("fs").promises;

// reading files

// reading files with path
// fs.readFile(path.join(__dirname, "files", "starter.txt"), (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// reading files without path

// fs.readFile("./files/starter.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// this also works

// fs.readFile("./files/starter.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// writing files
// fs.writeFile(path.join(__dirname, "files", "reply.txt"), "No shit!", (err) => {
//   if (err) throw err;
//   console.log("File written!");
// });

// // appendFile creates a new file if file doesn't exist
// fs.appendFile(
//   path.join(__dirname, "files", "reply.txt"),
//   " No shit again!",
//   (err) => {
//     if (err) throw err;
//     console.log("File appended!");
//   }
// );

// fs.writeFile(path.join(__dirname, "files", "reply.txt"), "No shit!", (err) => {
//   if (err) throw err;
//   console.log("File written!");

//   fs.appendFile(
//     path.join(__dirname, "files", "reply.txt"),
//     "\n\nNo shit again!",
//     (err) => {
//       if (err) throw err;
//       console.log("File appended!");

//       fs.rename(
//         path.join(__dirname, "files", "reply.txt"),
//         path.join(__dirname, "files", "renamedFile.txt"),
//         (err) => {
//           if (err) throw err;
//           console.log("File renamed!");
//         }
//       );
//     }
//   );
// });

// The method above promotes callback hell which isn't ideal. The method below utilises fsPromises to solve that problem.

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "lorem.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "lorem.txt"));
    await fsPromises.writeFile(path.join(__dirname, "files", "promise.txt"), data);
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promise.txt"),
      "\n\nNice to meet you!"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promise.txt"),
      path.join(__dirname, "files", "renamedPromise.txt"),
      data
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "renamedPromise.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
};

fileOps();

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
