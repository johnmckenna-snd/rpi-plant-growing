"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runPump1 = void 0;

var _express = _interopRequireDefault(require("express"));

var _runPump = require("../src/run-pump");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();

exports.runPump1 = router;
router.get('/runPump1', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var timeToRun, sleep;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.query.seconds);
            timeToRun = req.query.seconds;

            sleep = function sleep(milliseconds) {
              return new Promise(function (resolve) {
                return setTimeout(resolve, milliseconds);
              });
            };

            _context.prev = 3;
            _context.next = 6;
            return (0, _runPump.runPump1)();

          case 6:
            _context.next = 8;
            return sleep(timeToRun * 1000);

          case 8:
            _context.next = 10;
            return (0, _runPump.stopPump1)();

          case 10:
            res.send("pump1 Ran for ".concat(timeToRun, " seconds"));
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);
            res.send("pump run unsucessful with error ".concat(_context.t0));
            throw new Error(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());