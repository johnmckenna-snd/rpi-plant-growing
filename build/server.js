"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _runPump = require("./src/run-pump");

var _getMoistureLevel = require("./src/get-moisture-level");

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var port = process.env.PORT || 4000;
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use(_index["default"]);
app.get('/health', function (req, res) {
  res.writeHead(200, 'OK', {
    'Content-Type': 'text/plain'
  });
  res.end('Healthy!');
}); // pump currently calibrated to 1/4 cup per second

(0, _runPump.runPump1)();
setTimeout(function () {
  return (0, _runPump.stopPump1)();
}, 16000);
(0, _getMoistureLevel.getMoistureSensor1)();
process.on('SIGINT', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee() {
  return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _runPump.stopPump1)();

        case 2:
          _context.next = 4;
          return (0, _runPump.unexportPumps)();

        case 4:
          process.exit();

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
app.listen(port, function (e) {
  if (e) throw Error("couldn't start server on port: ".concat(port));
  console.log("Hello, and welcome to the TEST AGGREGATROR! Listening on port: ".concat(port));
});