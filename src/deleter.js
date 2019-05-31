(function () {
  var duplicates = unscrobbler.findDuplicates();

  duplicates.forEach(function (scrobble) {
    var deleteLink = scrobble.querySelector('.chartlist-more form[action$=delete] button');
    deleteLink.click();
  });
}());
