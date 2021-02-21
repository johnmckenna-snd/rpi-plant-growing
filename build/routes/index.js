"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _runPump = require("./runPump1");

var _runPump2 = require("./runPump2");

var _runPump3 = require("./runPump3");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use(_runPump.runPump1);
router.use(_runPump2.runPump2);
router.use(_runPump3.runPump3);
var _default = router;
exports["default"] = _default;