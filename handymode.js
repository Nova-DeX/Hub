(function () {
  var html = document.documentElement;
  var ua = navigator.userAgent || "";
  var uaDataMobile = !!(navigator.userAgentData && navigator.userAgentData.mobile === true);
  var mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(ua);
  var ipadOS = /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;

  html.classList.toggle("handymode", uaDataMobile || mobileUA || ipadOS);
})();
