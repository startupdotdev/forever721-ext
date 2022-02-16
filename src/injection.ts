import browser from "webextension-polyfill";

const key = "background";

browser.storage.local.get(key).then(data => {
  // has access to current webpage. Maybe where we do metamask?
});