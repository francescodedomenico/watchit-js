var driverBuilder = require("./watchit-driver")

let driver = driverBuilder.initDriver();

driver.get("https://google.com")