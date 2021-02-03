"use strict";

var _onoff = require("onoff");

var led = new _onoff.Gpio(17, 'out'); // Export GPIO17 as an output

var stopBlinking = false; // Toggle the state of the LED connected to GPIO17 every 200ms

var blinkLed = function blinkLed(_) {
  if (stopBlinking) {
    return led.unexport();
  }

  led.read().then(function (value) {
    return led.write(value ^ 1);
  }).then(function (_) {
    return setTimeout(blinkLed, 200);
  })["catch"](function (err) {
    return console.log(err);
  });
};

blinkLed(); // Stop blinking the LED after 5 seconds

setTimeout(function (_) {
  return stopBlinking = true;
}, 5000);