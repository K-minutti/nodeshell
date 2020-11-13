// const { cwd } = require("process");
// const ls = require("./ls.js");
const pwd = require("./pwd.js");
const lsFile = require("./ls.js");
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    process.stdout.write(pwd());
  }
  if (cmd === "ls") {
    lsFile();
  }
  // process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
