const webdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

exports.initDriver = function(){
    let driver = new webdriver.Builder()
    .forBrowser(webdriver.Browser.FIREFOX)
    .build();
    return driver;
}
