"use strict";

var _db = _interopRequireDefault(require("../Models/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var specific = function specific(req, res) {
  var found = _db["default"].find(function (item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    res.status(200).json(found);
  } else {
    return res.status(404).send({
      status: 404,
      message: 'Index not found'
    });
  }
};

module.exports = specific;