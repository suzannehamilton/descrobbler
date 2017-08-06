(function () {
  var duplicates = unscrobbler.findDuplicates();

  duplicates.forEach(function (scrobble) {
    var deleteLink = scrobble.querySelector('.chartlist-more-menu form[action$=unscrobble] button');
    deleteLink.click();
  });
}());
