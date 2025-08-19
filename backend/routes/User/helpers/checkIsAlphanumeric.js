const { isAlphanumeric } = require("validator");

function checkIsAlphanumeric(req, res, next) {
  const { userName } = req.body;

  if (userName && !isAlphanumeric(userName)) {
    const errorObj = res.locals.errorObj || {};
    errorObj.userName = "Username must be alphanumeric";
    return res.status(400).json({ message: "failure", payload: errorObj });
  }

  next();
}

module.exports = checkIsAlphanumeric;
