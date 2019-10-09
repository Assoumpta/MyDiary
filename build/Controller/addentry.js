"use strict";

var _db = _interopRequireDefault(require("../Models/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addentry = function addentry(req, res) {
  if (!req.body.title) {
    return res.status(400).send({
      success: 'false',
      descrition: 'title is required'
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      success: 'false',
      description: 'message is required'
    });
  }

  var addentry = {
    id: _db["default"].length + 1,
    title: req.body.title,
    description: req.body.description
  };

  _db["default"].push(addentry);

  return res.status(201).send({
    success: 'true',
    message: ' entry added successfully',
    addentry: addentry
  });
};

module.exports = addentry;