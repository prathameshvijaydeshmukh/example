// Include the chrome driver
require("chromedriver");

//include selenium webdriver(selenium library)
const swd = require("selenium-webdriver");
// create new web-browser
const browser = new swd.Builder();
const tab = browser.forBrowser("chrome").build();

//Get the credentials from the json file
const { email, pass } = require("./credentials.json");

// step 1 - Opening the sign in the page
// let tabToOpen = tab.get("https://auth.geeksforgeeks.org/");
const tabToOpen = tab.get("https://app.staging.admavin.com/login");
tabToOpen
  .then(function () {
    // Timeout to wait if connection is slow
    const findTimeOutP = tab.manage().setTimeouts({
      implicit: 10000, // 10 seconds
    });
    return findTimeOutP;
  })
  .then(function () {
    // step 2 - Finding the username input
    const promiseUsernameBox = tab.findElement(swd.By.name("email"));
    return promiseUsernameBox;
  })
  .then(function (usernameBox) {
    // step 3 - Entering the username
    const promiseFillUsername = usernameBox.sendKeys(email);
    return promiseFillUsername;
  })
  .then(function () {
    console.log(
      "Username entered successfully in" + "'login demonstration' for ADMAVIN"
    );
    //step 4 - finding the password input
    const promisePasswordBox = tab.findElement(swd.By.name("password"));
    return promisePasswordBox;
  })
  .then(function (passwordBox) {
    // step 5 - entering password
    const promiseFillPassword = passwordBox.sendKeys(pass);
    return promiseFillPassword;
  })
  .then(function () {
    console.log(
      "Password entered successfully in" + " 'login demonstration' for ADMAVIN"
    );
    //  step 6 - finding the sign In button
    const promiseSignInBtn = tab.findElement(swd.By.className("btn"));
    return promiseSignInBtn;
  })
  .then(function (signInBtn) {
    // step 7- clicking the signin button
    const promiseClickSignIn = signInBtn.click();
    return promiseClickSignIn;
  })
  .then(function () {
    // console.log("testing", siteUploadTab);/////////
    // siteUploadTabFn(siteUploadTab);
    console.log("Successfully signed in ADMAVIN!");
    tab.get("https://app.staging.admavin.com/site-upload");
  })
  // .catch(function (err) {
  //   console.log("Error", err, "occurred!");
  // })
  .then(function () {
    // Timeout to wait if connection is slow
    const findTime = tab.manage().setTimeouts({
      implicit: 10000, // 10 seconds
    });
    return findTime;
  })
  .then(function () {
    const promiseUploadTemplate = tab.findElement(
      // swd.By.xpath("//button[text()='Upload Template']")
      swd.By.xpath("//button[text()='Upload Template']")
    );
    console.log("Upload Template automate sucessfully");
    console.log("promiseUploadTemplate", promiseUploadTemplate);
    return promiseUploadTemplate;
  })
  .then(function (uploadExcelBtn) {
    const promiseUploadTemplateExcel = uploadExcelBtn.click();
    console.log("Upload Excel automate sucessfully");
    return promiseUploadTemplateExcel;
  })
  .then(function () {
    console.log("Successfully Excel - Upload  in ADMAVIN!");
  })
  //.then(function () {
  // console.log("responce", responce);
  // const compainId = "";
  // tab.get(`https://app.staging.admavin.com/campaign/${compainId}`);
  // console.log("prrrrrr");
  // /**
  //  * Utility function for Delay / Sleep - time in milliseconds
  //  */
  //   function sleep(time) {
  //     console.log("Sleeping for : ", time);
  //     return new Promise((resolve) => setTimeout(resolve, time));
  //   }
  //   async function lookForDom() {
  //     console.log("test");
  //     const loops = 30;
  //     let i = 1;
  //     while (i <= loops) {
  //       console.log("loop : ", i);

  //       // Check for Dom
  //       const checkForUpload = tab.findElement(
  //         swd.By.xpath("//p[contains(@class,'text-success')]")
  //       );
  //       console.log("checkForUpload=", checkForUpload);
  //       const isDomFound = i == 5;
  //       console.log("isDomFound=", isDomFound);
  //       // Dom not found case
  //       if (!isDomFound) {
  //         await sleep(5000);
  //         i++;
  //         continue;
  //       }
  //       // Dom found case

  //       console.log("Dome Found");
  //       break;
  //     }
  //     console.log("test end");
  //   }
  //   lookForDom();
  // })
  .then(function () {
    console.log("GenrateReport!");
    tab.get(
      "https://app.staging.admavin.com/campaign/630dcdff1a4a335d4b3bbb23/summary"
    );
  })
  .then(function () {
    // Timeout to wait if connection is slow
    const findTime = tab.manage().setTimeouts({
      implicit: 10000, // 10 seconds
    });
    return findTime;
  })
  .then(function () {
    const genrateReport = tab.findElement(
      swd.By.xpath("//button[text()='Generate Report']")
    );
    console.log("Genrate report automate sucessfully");
    console.log("genrateReport", genrateReport);
    return genrateReport;
  })
  .then(function (genratereportBtn) {
    const genratereport = genratereportBtn.click();
    console.log("GenrateReport automate sucessfully");
    return genratereport;
  })
  .catch(function (err) {
    console.log("Error", err, "occurred!");
  });

// .catch(function (err) {
//   console.log("Error", err, "occurred!");
// });

// const siteUploadTab = tab.get("https://app.staging.admavin.com/site-upload");
// // function siteUploadTabFn(siteUploadTab) {
// siteUploadTab

// }
//
