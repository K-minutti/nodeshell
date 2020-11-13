// const { cwd } = require("process");
// const ls = require("./ls.js");
const pwd = require("./pwd.js");
const lsFile = require("./ls.js");
const cat = require("./cat.js");
const request = require("request");
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    process.stdout.write(pwd());
  }
  if (cmd === "ls") {
    lsFile();
  }

  if (cmd.includes(" ")) {
    const array = cmd.split(" ");
    if (array[0] === "cat") {
      const fileName = array[1];
      cat(fileName);
    }
    if (array[0] === "curl") {
      const url = array[1];
      request(url);
    }
  }
  // process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
