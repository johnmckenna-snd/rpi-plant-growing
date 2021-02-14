"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unexportPump1 = exports.stopPump1 = exports.runPump1 = void 0;

var _onoff = require("onoff");

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pump1 = new _onoff.Gpio(26, 'out');

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
            console.log('Current Value', pump1Value);
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
            console.log('Current Value', pump1Value);
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
            pump1.read().then(function (value) {
              return pump1.write(1);
            });

          case 14:
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

var unexportPump1 = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee3() {
    return _regeneratorRuntime["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            pump1.unexport();
            _context3.next = 8;
            break;

          case 4:
            _context3.prev = 4;
            _context3.t0 = _context3["catch"](0);
            stopPump1();
            throw _context3.t0;

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 4]]);
  }));

  return function unexportPump1() {
    return _ref3.apply(this, arguments);
  };
}();

exports.unexportPump1 = unexportPump1;