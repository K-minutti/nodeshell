const fs = require("fs");

module.exports = (file) => {
  return fs.readFile(file, (err, data) => {
    if (err) throw err;
    process.stdout.write(`\n${data}`);
    //
    process.stdout.write("prompt > ");
  });
};
