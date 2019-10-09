"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../Models/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var modifyentry = function modifyentry(req, res) {
  var id = parseInt(req.params.id, 10);
  var EntryFound;
  var item;

  _db["default"].map(function (db, index) {
    if (db.id === id) {
      EntryFound = db;
      item = index;
    }
  });

  if (!EntryFound) {
    return res.status(404).send({
      success: 'false',
      message: 'ID of entry is not found'
    });
  }

  if (!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }

  var modifyentry = {
    id: EntryFound.id,
    title: req.body.title || EntryFound.title,
    description: req.body.description || EntryFound.description
  };

  _db["default"].splice(item, 1, modifyentry);

  return res.status(201).send({
    success: 'true',
    message: 'This entry has already modified',
    modifyentry: modifyentry
  });
};

var _default = modifyentry; //export default deleteentry;

exports["default"] = _default;