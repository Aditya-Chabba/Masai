// user.js
import SmartHome from "./smartHome.js";

function User(username, password) {
    this.username = username;
    this.password = password;
    this.home = new SmartHome(username);
}

// Simulated Authentication
User.prototype.authenticate = async function () {
    console.log(`Authenticating ${this.username}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`User ${this.username} authenticated successfully.`);
            resolve();
        }, 2000);
    });
};

// Add Device to Home
User.prototype.addDeviceToHome = function (device) {
    this.home.addDevice(device);
};

// Remove Device from Home
User.prototype.removeDeviceFromHome = function (deviceName) {
    this.home.removeDevice(deviceName);
};

export default User;
