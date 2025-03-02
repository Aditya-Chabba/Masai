// smartThermostat.js
import SmartDevice from "./smartDevice.js";

function SmartThermostat(name, brand, temperature = 22, mode = "Auto") {
    SmartDevice.call(this, name, "Thermostat", brand);
    this.temperature = temperature;
    this.mode = mode;
}

// Inherit from SmartDevice
SmartThermostat.prototype = Object.create(SmartDevice.prototype);
SmartThermostat.prototype.constructor = SmartThermostat;

// Set Temperature
SmartThermostat.prototype.setTemperature = function (temp) {
    this.temperature = temp;
    console.log(`${this.name} temperature set to ${temp}°C.`);
};

// Change Mode
SmartThermostat.prototype.setMode = function (newMode) {
    this.mode = newMode;
    console.log(`${this.name} mode changed to ${newMode}.`);
};

export default SmartThermostat;
