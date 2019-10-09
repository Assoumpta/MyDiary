"use strict";

var _db = _interopRequireDefault(require("../Models/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAll = function getAll(req, res) {
  if (!_db["default"]) {
    return res.status(404).send({
      status: 404,
      error: 'no entries found'
    });
  } else {
    res.status(200).send({
      status: 200,
      Models: _db["default"]
    });
  }
}; //export default getAll;


module.exports = getAll;