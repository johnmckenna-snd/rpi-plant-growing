"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unexportPump1 = exports.stopPump1 = exports.runPump1 = void 0;

var _onoff = require("onoff");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var pump1 = new _onoff.Gpio(26, 'out');

var runPump1 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return pump1.read();

          case 3:
            _context.next = 5;
            return pump1.write(0);

          case 5:
            console.log('Pump 1 Running');
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function runPump1() {
    return _ref.apply(this, arguments);
  };
}();

exports.runPump1 = runPump1;

var stopPump1 = function stopPump1() {
  pump1.read().then(function (value) {
    return pump1.write(1);
  });
};

exports.stopPump1 = stopPump1;

var unexportPump1 = function unexportPump1() {
  pump1.unexport();
};

exports.unexportPump1 = unexportPump1;