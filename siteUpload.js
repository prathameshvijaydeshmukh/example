// var siteUpload = require("./siteUpload");

// //  include selenium webdriver(selenium library)
const swd = require("selenium-webdriver");
// // create new web-browser
const browser = new swd.Builder();
const tab = browser.forBrowser("chrome").build();

// //Get the credentials from the json file
// const { email, pass } = require("./credentials.json");

// // step 1 - Opening the sign in the page
// // let tabToOpen = tab.get("https://auth.geeksforgeeks.org/");
// const tabToOpen1 = tab2.get("https://app.staging.admavin.com/login");
// tabToOpen1
//   .then(function () {
//     // Timeout to wait if connection is slow
//     const findTimeOutP = tab2.manage().setTimeouts({
//       implicit: 10000, // 10 seconds
//     });
//     return findTimeOutP;
//   })
//   .then(function () {
//     // step 2 - Finding the username input
//     const promiseUsernameBox = tab2.findElement(swd.By.name("email"));
//     return promiseUsernameBox;
//   })
//   .then(function (usernameBox) {
//     // step 3 - Entering the username
//     const promiseFillUsername = usernameBox.sendKeys(email);
//     return promiseFillUsername;
//   })
//   .then(function () {
//     console.log(
//       "Username entered successfully in" + "'login demonstration' for ADMAVIN"
//     );
//     //step 4 - finding the password input
//     const promisePasswordBox = tab2.findElement(swd.By.name("password"));
//     return promisePasswordBox;
//   })
//   .then(function (passwordBox) {
//     // step 5 - entering password
//     const promiseFillPassword = passwordBox.sendKeys(pass);
//     return promiseFillPassword;
//   })
//   .then(function () {
//     console.log(
//       "Password entered successfully in" + " 'login demonstration' for ADMAVIN"
//     );

//     //  step 6 - finding the sign In button
//     const promiseSignInBtn = tab2.findElement(swd.By.className("btn"));
//     return promiseSignInBtn;
//   })
//   .then(function (signInBtn) {
//     // step 7- clicking the signin button
//     const promiseClickSignIn = signInBtn.click();
//     return promiseClickSignIn;
//   });
const tabOpen1 = tab.get("https://app.staging.admavin.com/site-upload");
tabOpen1
  .then(function () {
    // Timeout to wait if connection is slow
    const findTime = tab.manage().setTimeouts({
      implicit: 10000, // 10 seconds
    });
    return findTime;
  })
  .then(function () {
    console.log("Upload Template automate sucessfully");
    const promiseUploadTemplate = tab.findElement(
      // swd.By.xpath("//button[text()='Upload Template']")
      swd.By.xpath("//button[text()='Upload Template']")
    );
    console.log("promiseUploadTemplate", promiseUploadTemplate);

    return promiseUploadTemplate;
  })
  .then(function (uploadExcelBtn) {
    const promiseUploadTemplateExcel = uploadExcelBtn.click();
    return promiseUploadTemplateExcel;
  })
  .then(function () {
    console.log("Successfully signed in ADMAVIN!");
  })
  .catch(function (err) {
    console.log("Error", err, "occurred!");
  });

module.exports = tabOpen1;
