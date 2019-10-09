"use strict";

var _db = _interopRequireDefault(require("../Models/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var deleteentry = function deleteentry(req, res) {
  var id = parseInt(req.params.id, 10);

  _db["default"].map(function (db, index) {
    if (db.id === id) {
      _db["default"].splice(index, 1);

      return res.status(200).send({
        success: 'true',
        message: 'Entry  deleted successfuly'
      });
    }
  });

  return res.status(404).send({
    success: 'false',
    message: 'entry does not  exist'
  });
};

module.exports = deleteentry;