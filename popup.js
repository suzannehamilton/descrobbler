function findDuplicates() {
  chrome.tabs.executeScript(null, { file: "lib/moment/moment.min.js" }, function() {
    chrome.tabs.executeScript(null, { file: "find_tracks.js" });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('find-duplicates')
    .addEventListener("click", findDuplicates);
});
