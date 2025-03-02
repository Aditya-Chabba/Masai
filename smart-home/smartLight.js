// smartLight.js
import SmartDevice from "./smartDevice.js";

function SmartLight(name, brand, brightness = 50, color = "White") {
    SmartDevice.call(this, name, "Light", brand);
    this.brightness = brightness;
    this.color = color;
}

// Inherit from SmartDevice
SmartLight.prototype = Object.create(SmartDevice.prototype);
SmartLight.prototype.constructor = SmartLight;

// Adjust Brightness
SmartLight.prototype.setBrightness = function (level) {
    this.brightness = level;
    console.log(`${this.name} brightness set to ${level}.`);
};

// Change Color
SmartLight.prototype.setColor = function (newColor) {
    this.color = newColor;
    console.log(`${this.name} color changed to ${newColor}.`);
};

export default SmartLight;
