function findDuplicates() {
  chrome.tabs.executeScript(null, { file: "lib/moment/moment.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "src/duplicates.js" }, function() {
      chrome.tabs.executeScript(null, { file: "src/highlighter.js" });
    });
  });
}

function deleteDuplicates() {
  chrome.tabs.executeScript(null, { file: "lib/moment/moment.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "src/duplicates.js" }, function() {
      chrome.tabs.executeScript(null, { file: "src/deleter.js" });
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('find-duplicates')
    .addEventListener("click", findDuplicates);

  document.getElementById('delete-duplicates')
    .addEventListener("click", deleteDuplicates);
});
