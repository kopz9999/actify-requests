(function (jQuery) {
  'use strict';

  function sendEvent(label) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'forms',
      eventAction: 'submit',
      eventLabel: label,
      transport: 'beacon'
    });
    console.log(label);
  }

  function processForms() {
    var forms = jQuery('form'), formPtr;
    for (var i = 0; i < forms.length; ++i) {
      formPtr = forms.eq(i);
      formPtr.submit(function() {
        sendEvent(formPtr.attr('id') || formPtr.attr('name') || formPtr.attr('action'));
      });
    }
  }

  function receiveMessage(event) {
    if (event.data == "pardotSubmit") {
      sendEvent(event.data);
    }
  }

  function processPardotForms() {
    window.addEventListener("message", receiveMessage, false);
  }

  function initializeEvents() {
    processForms();
    processPardotForms();
  }

  jQuery(document).ready(function() {
    initializeEvents();
  });
}(jQuery));
