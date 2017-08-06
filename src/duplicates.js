var unscrobbler = (function () {
  function areDatesSimilar(date1, date2) {
    if (date1 === null || date2 === null) {
      return false;
    }

    var differenceMins = date2.diff(date1, 'minutes');
    return differenceMins >= -2 && differenceMins <= 2;
  }

  function findDuplicates() {
    var scrobbles = document.querySelectorAll('.chartlist tbody tr');

    var duplicates = [];

    var lastDate = null;

    scrobbles.forEach(function (scrobble) {
      var dateString = scrobble.querySelector('.chartlist-timestamp span')
        .getAttribute('title');
      var newDate = moment(dateString, 'dddd D MMM YYYY, h:mmA');

      if (areDatesSimilar(lastDate, newDate)) {
        duplicates.push(scrobble);
      }

      lastDate = newDate;
    });

    return duplicates;
  }

  return {
    findDuplicates: findDuplicates
  }
}());
