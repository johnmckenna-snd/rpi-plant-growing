"use strict";

var _runPump = require("./src/run-pump");

(0, _runPump.runPump1)();
setTimeout(function () {
  return (0, _runPump.stopPump1)();
}, 20000);
(0, _runPump.unexportPump1)();
process.on('SIGINT', function () {
  (0, _runPump.stopPump1)();
  (0, _runPump.unexportPump1)();
});