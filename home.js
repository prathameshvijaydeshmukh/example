//  include selenium webdriver(selenium library)
const swd = require("selenium-webdriver");
// create new web-browser
const browser = new swd.Builder();
const tab1 = browser.forBrowser("chrome").build();

const tabOpen = tab1.get("https://app.staging.admavin.com/home");
tabOpen
  .then(function () {
    // Timeout to wait if connection is slow
    const findTimeOut = tab1.manage().setTimeouts({
      implicit: 5000, // 5 seconds
    });
    return findTimeOut;
  })
  .then(function () {
    // finding the Site Upload In button
    console.log("Home page automate sucessfully");
    const promiseButtonSiteUpload = tab1.findElement(
      swd.By.css("a[href='/site-upload']")
    );
    return promiseButtonSiteUpload;
  })
  .then(function (uploadInBtn) {
    // clicking the upload button
    const promiseButtonClick = uploadInBtn.click();
    return promiseButtonClick;
  })
  .then(function () {
    console.log("Successfully signed in ADMAVIN!");
  })
  .catch(function (err) {
    console.log("Error", err, "occurred!");
  });

module.exports = tabOpen;
