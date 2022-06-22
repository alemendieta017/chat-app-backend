const chalk = require("chalk")

exports.success = function (req, res, message, status) {
  res.status(status || 200)
  res.send({
    error : "",
    body : message
  })
}

exports.error = function (req, res, message, status, details) {
  res.status(status || 500)
  res.send({
    error : message,
    body : ""
  })
  console.error(chalk.red("[Response Error] " + details));
}
