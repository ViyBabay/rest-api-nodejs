const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return next(HttpError(404, `${id} is not valid id!`));
  }
  next();
};

module.exports = validateId;
