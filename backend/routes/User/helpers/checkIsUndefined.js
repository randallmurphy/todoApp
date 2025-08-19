function checkIsUndefined(req, res, next) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Please fill out the form." });
  }
  next();
}

module.exports = checkIsUndefined;
