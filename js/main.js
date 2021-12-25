var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* ==========================================================================
   NOTE:
   This file is being used to activate and set options for all jQuery plugins
   for this template. Please don't modify this file unless necessary. This will 
   make it easy for you to upgrade your website with new template files easily 
   when new version of this template will be available.    
   --------------------------------------------------------------------------
    TABLE OF CONTENT
   --------------------------------------------------------------------------
   01 - Main Navigation
   02 - Portfolio Filter Menu
   03 - Scroll to Next Section Button
   04 - Portfolio Init
   05 - Carousel
   06 - Back to Top Button
   07 - Popup (lightbox)
   08 - Responsive Video
   09 - Mailchimp Settings
   ========================================================================== */

jQuery(document).ready( function($) {
	
	'use strict';
	
	$('#nav').onePageNav();
	
	var document_body = $(document.body);
	
	/*  01 - Main Navigation */
	document_body.on( 'click', '#main-nav-toggle', function(){
		$(this).toggleClass( 'btn-cross' );
		$('.header').toggleClass( 'toggle' );
	});
	document_body.on( 'click', '#nav > li > a', function(){
		$('.header').removeClass( 'toggle' );
		$('#main-nav-toggle').removeClass( 'btn-cross' );
	});
	
	/* 03 - Scroll to Next Section Button */
	$('.scroll-btn').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	});
	
	/* 06 - Back to Top Button */
	var offset = 300,
	offset_opacity = 1200,
	scroll_top_duration = 700,
	$back_to_top = $('.go-top');
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	/* 09 - Mailchimp Settings	*/
	$('#mailchimp').ajaxChimp({
		callback: mailchimpCallback,
		url: "https://web.archive.org/web/20200910071553/https://oscodo.us9.list-manage.com/subscribe/post?u=aef5e76b30521b771cf866464&amp;id=f9f9e8db45"
	});	
	function mailchimpCallback(resp) {
		 if (resp.result === 'success') {
			$('#mailchimp .subscription-success').html('<i class="icon_check_alt2"></i>' + resp.msg).fadeIn(1000);
			$('#mailchimp .subscription-error').fadeOut(500);
			
		} else if(resp.result === 'error') {
			$('#mailchimp .subscription-success').fadeOut(500);
			$('#mailchimp .subscription-error').html('<i class="icon_close_alt2"></i>' + resp.msg).fadeIn(1000);
		}  
	}
	
	
});


}
/*
     FILE ARCHIVED ON 07:15:53 Sep 10, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:29:07 Dec 25, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 294.82
  exclusion.robots: 134.303
  exclusion.robots.policy: 134.296
  xauthn.identify: 97.528
  xauthn.chkprivs: 36.608
  RedisCDXSource: 4.568
  esindex: 0.007
  LoadShardBlock: 140.543 (3)
  PetaboxLoader3.datanode: 135.798 (4)
  CDXLines.iter: 13.627 (3)
  load_resource: 130.443
  PetaboxLoader3.resolve: 87.28
*/