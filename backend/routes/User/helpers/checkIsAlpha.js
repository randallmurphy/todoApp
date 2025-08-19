const { isAlpha } = require("validator");

function checkIsAlpha(req, res, next) {
  const { firstName, lastName } = req.body;

  if ((firstName && !isAlpha(firstName)) || (lastName && !isAlpha(lastName))) {
    const errorObj = res.locals.errorObj || {};
    errorObj.nameError = "First and last name must contain letters only";
    return res.status(400).json({ message: "failure", payload: errorObj });
  }

  next();
}

module.exports = checkIsAlpha;
