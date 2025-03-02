// smartDevice.js
import Device from "./device.js";

function SmartDevice(name, type, brand, connectivity = "WiFi") {
    Device.call(this, name, type);
    this.brand = brand;
    this.connectivity = connectivity;
}

// Inherit from Device
SmartDevice.prototype = Object.create(Device.prototype);
SmartDevice.prototype.constructor = SmartDevice;

// Check Connectivity
SmartDevice.prototype.checkConnectivity = function () {
    console.log(`${this.name} is connected via ${this.connectivity}.`);
};

// Simulate Firmware Update
SmartDevice.prototype.updateFirmware = async function () {
    console.log(`Updating firmware for ${this.name}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${this.name} firmware updated successfully.`);
            resolve();
        }, 2000);
    });
};

export default SmartDevice;
