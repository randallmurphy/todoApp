const { isEmail } = require("validator");

function checkIsEmail(req, res, next) {
  const { email } = req.body;

  if (email && !isEmail(email)) {
    const errorObj = res.locals.errorObj || {};
    errorObj.emailError = "Email must be valid";
    return res.status(400).json({ message: "failure", payload: errorObj });
  }

  next();
}

module.exports = checkIsEmail;
