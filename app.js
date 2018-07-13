(function (jQuery) {
  function trackCall(label) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'calls',
      eventAction: 'click',
      eventLabel: label,
    });
    console.log(label);
  }
  
  function setTrackCalls() {
    var topPhone = jQuery('#text-21-0-1-1 > p > a:nth-child(2)');    
    var bottomPhone =jQuery('#text-57-0-0-2 > p > a:nth-child(1)');
    var contentPhone =jQuery("#content a[href^='tel']"); // Covers location pages and contact

    topPhone.click(function() {
      trackCall('header');
    });

    bottomPhone.click(function() {
      trackCall('footer');
    });

    contentPhone.click(function () {
      trackCall(jQuery('meta[property="og:title"]').attr("content"));
    });
  }

  function init() {
    setTrackCalls();
  }

  jQuery(document).ready(function() {
    init();
  });
}(jQuery));
