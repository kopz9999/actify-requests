(function (jQuery) {
    'use strict'
  
    var options = [
    {
      name: 'Google',
      expression: ['google.com'] 
    },
    {
      name: 'Yahoo',
      expression: ['yahoo.com'] 
    },
    {
      name: 'Bing',
      expression: ['bing.com'] 
    },
    {
      name: 'Facebook',
      expression: ['facebook.com'] 
    },
    {
      name: 'Twitter',
      expression: ['twitter.com', 't.co']
    },
    {
      name: 'Yelp',
      expression: ['yelp.com'] 
    },
    {
      name: 'LinkedIn',
      expression: ['linkedin.com'] 
    },
    {
      name: 'Web MD',
      expression: ['webmd.com'] 
    },
    {
      name: 'Google Ad',
      expression: ['/?gclid='] 
    },
    {
      name: 'Facebook Ad',
      expression: ['utm_source=facebook'] 
    },
    {
      name: 'Doctor Referral',
      expression: [] 
    },
    {
      name: 'Patient Referral',
      expression: [] 
    },
    {
      name: 'The News',
      expression: [] 
    },
    {
      name: 'Other',
      expression: [] 
    }
  ];

  function processForm() {
    var form = jQuery('.fsSection.fs1Col');
    var labels = form.find('label');
    var referrerDropdownLabel, referrerInputLabel, dropdown, hiddenInput, opt, 
        expression, optNode;
    var referrer = document.referrer;

    referrerDropdownLabel = labels.filter(function(_, val) {
      return jQuery(val).text().trim() === "How did you hear about us?*";
    });

    referrerInputLabel = labels.filter(function(_, val) {
      return jQuery(val).text().trim() === "Referral";
    });
    
    dropdown = referrerDropdownLabel.next();
    hiddenInput = referrerInputLabel.next();
    
    for (var i=0; i < options.length; ++i) {
      opt = options[i];
      optNode = dropdown.find('option[value="'+opt.name+'"]');
      expression = opt.expression;
      for (var j = 0; j < expression.length; ++j) {
        if (referrer.indexOf(expression[j]) >= 0) {
          optNode.prop('selected', true);  
        }    
      } 
    }
    
    hiddenInput.val(referrer);

    console.log("Custom referrer integration loaded");
    console.log(referrer);
  }
  
  jQuery(document).ready(function() {
    processForm();
  });
}(jQuery));
