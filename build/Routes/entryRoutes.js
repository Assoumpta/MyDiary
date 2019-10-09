"use strict";

var _express = _interopRequireDefault(require("express"));

var _getallentriesl = _interopRequireDefault(require("../Controller/getallentriesl"));

var _getspecificentry = _interopRequireDefault(require("../Controller/getspecificentry"));

var _addentry = _interopRequireDefault(require("../Controller/addentry"));

var _modifyentry = _interopRequireDefault(require("../Controller/modifyentry"));

var _deleteentry = _interopRequireDefault(require("../Controller/deleteentry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import bodyParser from 'body-parser';
//import bodyParser from 'body-parser';
var router = _express["default"].Router();

router.get('/api/v1/entries', _getallentriesl["default"]);
router.get('/api/v1/entries/:id', _getspecificentry["default"]);
router.post('/api/v1/entries/', _addentry["default"]);
router.put('/api/v1/entries/:id', _modifyentry["default"]);
router["delete"]('/api/v1/entries/:id', _deleteentry["default"]);
module.exports = router;