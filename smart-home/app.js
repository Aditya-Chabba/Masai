// app.js
import SmartLight from "./smartLight.js";
import SmartThermostat from "./smartThermostat.js";
import User from "./user.js";

async function main() {
    // Create a user
    const user = new User("Gurkaran", "securePass123");
    await user.authenticate();

    // Create smart devices
    const livingRoomLight = new SmartLight("Living Room Light", "Philips", 75, "Warm White");
    const bedroomThermostat = new SmartThermostat("Bedroom Thermostat", "Nest", 24, "Cool");

    // Add devices to the user's smart home
    user.addDeviceToHome(livingRoomLight);
    user.addDeviceToHome(bedroomThermostat);

    // List all devices
    user.home.listDevices();

    // Interact with the smart light
    livingRoomLight.turnOn();
    livingRoomLight.setBrightness(90);
    livingRoomLight.setColor("Blue");

    // Interact with the smart thermostat
    bedroomThermostat.setTemperature(26);
    bedroomThermostat.setMode("Heat");

    // Firmware update
    await livingRoomLight.updateFirmware();

    // Remove a device
    user.removeDeviceFromHome("Bedroom Thermostat");
    user.home.listDevices();
}

main();
