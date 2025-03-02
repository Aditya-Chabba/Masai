// device.js
function Device(name, type) {
    this.name = name;
    this.type = type;
    this.status = "off";
}

// Turn on the device
Device.prototype.turnOn = function () {
    this.status = "on";
    console.log(`${this.name} is now ON.`);
};

// Turn off the device
Device.prototype.turnOff = function () {
    this.status = "off";
    console.log(`${this.name} is now OFF.`);
};

// Check device status
Device.prototype.getStatus = function () {
    console.log(`${this.name} is currently ${this.status}.`);
};

export default Device;
