document.head.insertAdjacentHTML(
  "beforeend",
  `<link rel="stylesheet" type="text/css" href="${chrome.runtime.getURL(
    "styles.css"
  )}">`
);
