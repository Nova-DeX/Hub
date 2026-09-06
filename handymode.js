(function () {
  function matches(query) {
    return window.matchMedia && window.matchMedia(query).matches;
  }

  function isHandymode() {
    if (navigator.userAgentData && typeof navigator.userAgentData.mobile === 'boolean') {
      return navigator.userAgentData.mobile;
    }

    var ua = navigator.userAgent || navigator.vendor || window.opera || '';

    if (/Mobi|Android|iPhone|iPad|iPod|Windows Phone|Mobile/i.test(ua)) {
      return true;
    }

    return Boolean(
      navigator.maxTouchPoints > 1 &&
      matches('(pointer: coarse)') &&
      matches('(hover: none)')
    );
  }

  function applyHandymode() {
    document.documentElement.classList.toggle('handymode', isHandymode());
  }

  applyHandymode();
  window.addEventListener('pageshow', applyHandymode);

  if (window.matchMedia) {
    ['(pointer: coarse)', '(hover: none)'].forEach(function (query) {
      var media = window.matchMedia(query);
      if (media.addEventListener) {
        media.addEventListener('change', applyHandymode);
      } else if (media.addListener) {
        media.addListener(applyHandymode);
      }
    });
  }
}());
