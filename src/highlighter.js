(function () {
  var duplicates = unscrobbler.findDuplicates();

  duplicates.forEach(function (scrobble) {
    scrobble.setAttribute('style', 'background: darkcyan');
  });
}());
