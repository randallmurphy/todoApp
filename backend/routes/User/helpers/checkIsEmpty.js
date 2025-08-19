function checkIsEmpty(req, res, next) {
  const errorObj = {};
  const body = req.body;

  for (let key in body) {
    if (!body[key] || body[key].toString().trim() === "") {
      errorObj[key] = `${key} cannot be empty`;
    }
  }

  if (Object.keys(errorObj).length > 0) {
    return res.status(400).json({ message: "failure", payload: errorObj });
  }

  res.locals.errorObj = errorObj;
  next();
}

module.exports = checkIsEmpty;
