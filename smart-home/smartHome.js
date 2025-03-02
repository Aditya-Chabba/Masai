// smartHome.js
function SmartHome(owner) {
    this.owner = owner;
    this.devices = [];
}

// Add Device
SmartHome.prototype.addDevice = function (device) {
    this.devices.push(device);
    console.log(`${device.name} added to ${this.owner}'s smart home.`);
};

// Remove Device
SmartHome.prototype.removeDevice = function (deviceName) {
    this.devices = this.devices.filter(device => device.name !== deviceName);
    console.log(`${deviceName} removed from ${this.owner}'s smart home.`);
};

// List Devices
SmartHome.prototype.listDevices = function () {
    console.log(`${this.owner}'s Smart Home Devices:`);
    this.devices.forEach(device => console.log(`- ${device.name} (${device.type})`));
};

export default SmartHome;
