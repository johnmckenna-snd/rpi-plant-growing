"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unexportPumps = exports.stopPump3 = exports.runPump3 = exports.stopPump2 = exports.runPump2 = exports.stopPump1 = exports.runPump1 = void 0;

var _onoff = require("onoff");

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pump1 = new _onoff.Gpio(26, 'out');
var pump2 = new _onoff.Gpio(20, 'out');
var pump3 = new _onoff.Gpio(21, 'out');

var runPump1 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee() {
    var pump1Value;
    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return pump1.read();

          case 3:
            pump1Value = _context.sent;
            console.log('Pump 1 Current Value', pump1Value);
            _context.next = 7;
            return pump1.write(0);

          case 7:
            console.log('Pump 1 Running');
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function runPump1() {
    return _ref.apply(this, arguments);
  };
}();

exports.runPump1 = runPump1;

var stopPump1 = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee2() {
    var pump1Value;
    return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return pump1.read();

          case 3:
            pump1Value = _context2.sent;
            console.log('Pump 1 Current Value', pump1Value);
            _context2.next = 7;
            return pump1.write(1);

          case 7:
            console.log('Pump 1 Stopped');
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function stopPump1() {
    return _ref2.apply(this, arguments);
  };
}();

exports.stopPump1 = stopPump1;

var runPump2 = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee3() {
    var pump2Value;
    return _regeneratorRuntime["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return pump2.read();

          case 3:
            pump2Value = _context3.sent;
            console.log('Pump 2 Current Value', pump2Value);
            _context3.next = 7;
            return pump2.write(0);

          case 7:
            console.log('Pump 2 Running');
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function runPump2() {
    return _ref3.apply(this, arguments);
  };
}();

exports.runPump2 = runPump2;

var stopPump2 = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee4() {
    var pump2Value;
    return _regeneratorRuntime["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return pump2.read();

          case 3:
            pump2Value = _context4.sent;
            console.log('Pump 2 Current Value', pump2Value);
            _context4.next = 7;
            return pump2.write(1);

          case 7:
            console.log('Pump 2 Stopped');
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function stopPump2() {
    return _ref4.apply(this, arguments);
  };
}();

exports.stopPump2 = stopPump2;

var runPump3 = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee5() {
    var pump3Value;
    return _regeneratorRuntime["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return pump3.read();

          case 3:
            pump3Value = _context5.sent;
            console.log('Pump 3 Current Value', pump3Value);
            _context5.next = 7;
            return pump3.write(0);

          case 7:
            console.log('Pump 3 Running');
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            throw _context5.t0;

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function runPump3() {
    return _ref5.apply(this, arguments);
  };
}();

exports.runPump3 = runPump3;

var stopPump3 = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee6() {
    var pump3Value;
    return _regeneratorRuntime["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return pump3.read();

          case 3:
            pump3Value = _context6.sent;
            console.log('Pump 3 Current Value', pump3Value);
            _context6.next = 7;
            return pump3.write(1);

          case 7:
            console.log('Pump 3 Stopped');
            _context6.next = 13;
            break;

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            throw _context6.t0;

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));

  return function stopPump3() {
    return _ref6.apply(this, arguments);
  };
}();

exports.stopPump3 = stopPump3;

var unexportPumps = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee7() {
    return _regeneratorRuntime["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            pump1.unexport();
            pump2.unexport();
            pump3.unexport();
            _context7.next = 10;
            break;

          case 6:
            _context7.prev = 6;
            _context7.t0 = _context7["catch"](0);
            stopPump1();
            throw _context7.t0;

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 6]]);
  }));

  return function unexportPumps() {
    return _ref7.apply(this, arguments);
  };
}();

exports.unexportPumps = unexportPumps;