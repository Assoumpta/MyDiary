"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _entryRoutes = _interopRequireDefault(require("./Routes/entryRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/', _entryRoutes["default"]);
"";
var PORT = 4000;
app.listen(process.env.PORT || 4000, function () {
  return console.log("App listening on PORT 4000");
});