import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    alert("Thanks for installing Forever721-ext!");
  }
});