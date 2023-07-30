const moment = require('moment-timezone');

moment.tz.setDefault('Asia/Kolkata');

const targetTimezone = "Europe/Paris";

console.log(process.argv);

console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);