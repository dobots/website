//==============================================================
// CUSTOM SCRIPTS
// Author: Last Door Solutions (http://lastdoorsolutions.com)
// 2011
// ==============================================================


$(document).ready(function() {

//==============================================================
// Superfish
// ==============================================================
$('ul.main-nav').superfish({
	delay		: 0
}); 
$('span.sf-sub-indicator').remove(); 

//==============================================================
// Maintain Equal Height
// ==============================================================

//$('.two-col').equalHeights(); // Add as per your requirement

//==============================================================
// get Widget title as a widget class
// ==============================================================

$('.widget_text').each( function(){
var widgetTitle = $(this).find('.widget-title').text();
var widgetTitleSlug = widgetTitle.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
widgetTitleSlug = widgetTitleSlug.toLowerCase();
widgetTitleSlug = "widget-" + widgetTitleSlug;
$(this).addClass(widgetTitleSlug);
});

  $('.flexslider').flexslider({
    animation: "slide",
		controlNav: false
  });


});
// end ready function here.


   /*$(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
				smoothHeight: true,   
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });
		
		    $(function(){
      SyntaxHighlighter.all();
    });*/
		// Can also be used with $(document).ready()
		
		
		
		//===============================================================
// Maintain Equal Height
// ==============================================================
(function($) {
	$.fn.equalHeight = function() {
		var maxHeight = 0;
		this.each(function() {
			$(this).each(function() {
			maxHeight = Math.max(maxHeight, $(this).height());
			});
		
		});
		console.log(maxHeight);
		return maxHeight;
	};
})(jQuery);
jQuery('.same-height').css('height', jQuery('.same-height').equalHeight() );
//jQuery('.box p').equalHeight();
//jQuery('.box-cont').equalHeight();

//jquery tabs for about us pages
     $(function() {
    
        
            
              $("#example-two").organicTabs({
                "speed": 200
            });
    
    
        });
		
