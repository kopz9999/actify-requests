jQuery(document).ready(function(){

    var referrer = document.referrer;
    var url_string = window.location.href;
    var url = new URL(url_string);
    var utm_source = url.searchParams.get("utm_source") || '';
    var utm_campaign = url.searchParams.get("utm_campaign") || '';
    var gclid = url.searchParams.get("gclid");
    
    if (gclid) {
        utm_source = "google";
        utm_campaign = gclid;
    }
    
    //home reservation button that toggles showing the calendly form
jQuery('.home-reservation-button').click(function(){
    if(jQuery('.calendly-location-section').css('display') !== 'none' || jQuery('.calendly-form-section').css('display') !== 'none') {
        jQuery('.calendly-location-section').slideUp();
        jQuery( ".calendly-form-section" ).slideUp();
    }else {
        jQuery('.calendly-location-section').slideDown();
        jQuery('html,body').animate({
          scrollTop: jQuery(".calendly-location-section").offset().top - 100
      },200);
    }
});
    
jQuery('.how-it-works-graphic').click(function(){
    jQuery('.calendly-location-section').slideDown();
    jQuery( ".calendly-form-section" ).slideUp();
    jQuery('html,body').animate({
        scrollTop: jQuery(".calendly-location-section").offset().top - 100
    },400);
});
    
jQuery('.calendly-locations-close .module-icon-item').click(function(){
    jQuery('.calendly-location-section').slideUp();
    jQuery( ".calendly-form-section" ).slideUp();
});
    
    //add a back button to change locations for the form
jQuery('.calendly-back-button').click(function(){
    jQuery('.calendly-location-section').slideDown();
    jQuery( ".calendly-form-section" ).slideUp();
});

  //add a button action for each of 10 locations
jQuery('.baltimore-reservation-button').click(function(){
    jQuery('.calendly-location-section').slideUp();
    jQuery( ".calendly-form-section" ).slideDown();
    jQuery( ".calendly-form-replace-block" ).html('<div class="calendly-inline-widget" data-url="https://calendly.com/actify-coordinators/baltimore-consultation?utm_campaign='+utm_campaign+'&utm_source='+utm_source+'" style="width:100%; height:600px;"></div><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" />');
    jQuery('html,body').animate({
        scrollTop: jQuery(".calendly-location-section").offset().top - 100
    },200);
});
    
jQuery('.beverly-hills-reservation-button').click(function(){
    jQuery('.calendly-location-section').slideUp();
    jQuery( ".calendly-form-section" ).slideDown();
    jQuery( ".calendly-form-replace-block" ).html('<div class="calendly-inline-widget" data-url="https://calendly.com/actify-coordinators/beverly-hills-consultation?utm_campaign='+utm_campaign+'&utm_source='+utm_source+'" style="width:100%; height:600px;"></div><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" />');
    jQuery('html,body').animate({
        scrollTop: jQuery(".calendly-location-section").offset().top - 100
    },200);
});
    
jQuery('.denver-reservation-button').click(function(){
    jQuery('.calendly-location-section').slideUp();
    jQuery( ".calendly-form-section" ).slideDown();
    jQuery( ".calendly-form-replace-block" ).html('<div class="calendly-inline-widget" data-url="https://calendly.com/actify-coordinators/denver-consultation?utm_campaign='+utm_campaign+'&utm_source='+utm_source+'" style="width:100%; height:600px;"></div><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" />');
    jQuery('html,body').animate({
        scrollTop: jQuery(".calendly-location-section").offset().top - 100
    },200);
});
    
jQuery('.new-york-reservation-button').click(function(){
    jQuery('.calendly-location-section').slideUp();
    jQuery( ".calendly-form-section" ).slideDown();
    jQuery( ".calendly-form-replace-block" ).html('<div class="calendly-inline-widget" data-url="https://calendly.com/actify-coordinators/new-york-consultation?utm_campaign='+utm_campaign+'&utm_source='+utm_source+'" style="width:100%; height:600px;"></div><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" />');
    jQuery('html,body').animate({
        scrollTop: jQuery(".calendly-location-section").offset().top - 100
    },200);
});
    
jQuery('.palm-beach-reservation-button').click(function(){
    jQuery('.calendly-location-section').slideUp();
    jQuery( ".calendly-form-section" ).slideDown();
    jQuery( ".calendly-form-replace-block" ).html('<div class="calendly-inline-widget" data-url="https://calendly.com/actify-coordinators/palm-beach-consultation?utm_campaign='+utm_campaign+'&utm_source='+utm_source+'" style="width:100%; height:600px;"></div><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" />');
    jQuery('html,body').animate({
        scrollTop: jQuery(".calendly-location-section").offset().top - 100
    },200);
});
    
jQuery('.philadelphia-reservation-button').click(function(){
    jQuery('.calendly-location-section').slideUp();
    jQuery( ".calendly-form-section" ).slideDown();
    jQuery( ".calendly-form-replace-block" ).html('<div class="calendly-inline-widget" data-url="https://calendly.com/actify-coordinators/philadelphia-consultation?utm_campaign='+utm_campaign+'&utm_source='+utm_source+'" style="width:100%; height:600px;"></div><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" />');
    jQuery('html,body').animate({
        scrollTop: jQuery(".calendly-location-section").offset().top - 100
    },200);
});
    
jQuery('.potomac-reservation-button').click(function(){
    jQuery('.calendly-location-section').slideUp();
    jQuery( ".calendly-form-section" ).slideDown();
    jQuery( ".calendly-form-replace-block" ).html('<div class="calendly-inline-widget" data-url="https://calendly.com/actify-coordinators/potomac-consultation?utm_campaign='+utm_campaign+'&utm_source='+utm_source+'" style="width:100%; height:600px;"></div><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" />');
    jQuery('html,body').animate({
        scrollTop: jQuery(".calendly-location-section").offset().top - 100
    },200);
});
    
jQuery('.princeton-reservation-button').click(function(){
    jQuery('.calendly-location-section').slideUp();
    jQuery( ".calendly-form-section" ).slideDown();
    jQuery( ".calendly-form-replace-block" ).html('<div class="calendly-inline-widget" data-url="https://calendly.com/actify-coordinators/princeton-consultation?utm_campaign='+utm_campaign+'&utm_source='+utm_source+'" style="width:100%; height:600px;"></div><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" />');
    jQuery('html,body').animate({
        scrollTop: jQuery(".calendly-location-section").offset().top - 100
    },200);
});
    
jQuery('.raleigh-reservation-button').click(function(){
    jQuery('.calendly-location-section').slideUp();
    jQuery( ".calendly-form-section" ).slideDown();
    jQuery( ".calendly-form-replace-block" ).html('<div class="calendly-inline-widget" data-url="https://calendly.com/actify-coordinators/raleigh-consultation?utm_campaign='+utm_campaign+'&utm_source='+utm_source+'" style="width:100%; height:600px;"></div><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" />');
    jQuery('html,body').animate({
        scrollTop: jQuery(".calendly-location-section").offset().top - 100
    },200);
});
    
jQuery('.san-francisco-reservation-button').click(function(){
    jQuery('.calendly-location-section').slideUp();
    jQuery( ".calendly-form-section" ).slideDown();
    jQuery( ".calendly-form-replace-block" ).html('<div class="calendly-inline-widget" data-url="https://calendly.com/actify-coordinators/san-francisco-consultation?utm_campaign='+utm_campaign+'&utm_source='+utm_source+'" style="width:100%; height:600px;"></div><script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" />');
    jQuery('html,body').animate({
        scrollTop: jQuery(".calendly-location-section").offset().top - 100
    },200);
});

});
