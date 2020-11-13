const request = require("request");
module.exports = function (url) {
  return request(url, function (error, response, body) {
    if (error) throw error;
    process.stdout.write(`\n${body}`);
    //
    process.stdout.write("prompt > ");
  });
};
