$(document).ready(function(){
//
// GLOBAL CONFIG 
//

	$(document).foundation({
		accordion : {
			active_class: 'open',
			callback: function (){
				setSizes();
			}			
		},
		// highlight the selected event/case when that items action button is clicked, use .hasClass to exclude other drop-downs in .item from firing the selection function
		dropdown: {
			opened: function(){},
			closed: function(){}
		},
		tab: {
			callback : function (tab) {},
			toggled: function(){
				$(document).foundation('reflow');			
			}
		},
		reveal: {
//			close_on_background_click: false,
//		    close_on_esc: false,
		    dismiss_modal_class: 'close-reveal-modal, .close-modal'
		}
	});
	
	
	// lazy loading code for TABS
//	$('.tabs dd a').on('click', function(e){
//		var link = $(this),
//			links = link.closest('.tabs').find('dd'),
//			targets = link.closest('.tabs').next('.tabs-content').find('>.content'),
//			target = $('#' + this.href.split('#')[1]);
//			
//			e.preventDefault();
//				link.append('&nbsp;<i class="fa fa-refresh fa-spin"></i>');
//
//				setTimeout(function() {
//	                link.find('.fa').remove();
//	                
//	                targets.attr('aria-hidden', 'true').removeClass('active').hide();
//	                  	                  
//					links.attr('aria-hidden', null).removeClass('active');
//					
//					link.closest('dd').addClass('active');
//					target.addClass('active').show();
//					
//	            }, 1500);
//
//			return false;
//		});
	
	// lazy loading code for ACCORDIONS
//	$('.accordion dd a').on('click', function(e){
//			var link = $(this),
//				links = link.closest('.accordion').find('dd'),
//				icon = $(this).find('.fa'),
//				target = $('#' + this.href.split('#')[1]),
//				targets = links.find('.content'),
//				open = target.is(':visible');
//				
//				targets.removeClass('open').hide();
//				links.removeClass('open').find('.fa').removeClass('fa-minus fa-refresh fa-spin').addClass('fa-chevron-down')
//				
//				
//				e.preventDefault();
//				if (!open){
//					icon.removeClass('fa-chevron-down').addClass('fa-refresh fa-spin');
//					
//					
//					setTimeout(function() {
//		                icon.removeClass('fa-refresh fa-spin').addClass('fa-minus');
//						link.closest('dd').addClass('open')
//						target.slideDown().addClass('open');
//						open = true;
//		            }, 1500);
//
//				} else {
//	                icon.removeClass('fa-minus').addClass('fa-chevron-down');
//					link.closest('dd').removeClass('open')
//					target.removeClass('open').hide();
//					open = false;
//				}
//			return false;
//		});
	
	
	
	
	// capture click events on links with .mask-it
	// use data attr to target element to apply mask
	// timeout the page change to the links URL to simulate loading
		    	
	$('.mask-it').on('click',function (e) {
	  	clearTimeout(maskTimeout);	            	
	
		var href = $(this).attr('href'),
			target = $(this).data('mask-target'),
			maskTimeout;
			// stop the URL from loading
			e.preventDefault();
			
	    $(target).loadingMask({
		    opacity: 1,
	        func: function(){
	            maskTimeout = setTimeout(function(){
	                //$(target).hideMask();	                
	                //window.location.href = href;
	                
            }, 3000);
	        }
	    });  
	    
	});
	
		
		
	
	// add search field only to select elements with .select-searchable class	
	$('.select').each(function(){	
		if(!$(this).hasClass('select-searchable')){
			$(this).chosen({inherit_select_classes: true, disable_search: true});
		} else {
			$(this).chosen({inherit_select_classes: true});
		
		}
	});
	

}); // end docready


/* MASK FUNCTION  */
(function($) {
		// Take an element and show thats its loading something
		// and places a div over the top of the content to prevent interaction.
		$.fn.loadingMask = function(options) {
			var defaults = {
				image: 'images/loading-shield2.gif',
				text: 'loading...',
				bgcolor : '#aaa',
				opacity : 0.85,
				func : null
			};
			options = $.extend(defaults, options);
			options.opacity = options.opacity ? options.opacity.toString() : 0.85;
			options.bgcolor = options.bgcolor ? options.bgcolor : '#F3F3F3';


			return this.each( function() {
				
				// The element that will be loading
				var $parent = $(this),
				
				// The div that make the item above appear to be loading
				$mask = $('#loading_' + $parent.data('loading-id') );
				
                // locate the active Cloak
		        this.mask = jQuery(document).find('.mask').get();
        
                // if it exists.. hide it!
                if(this.mask) {
                    jQuery('body').find('.mask').hide();
                }

                
				// The loading div exists & is visible
				// Hide it
				if ( $mask.length && $mask.is(':visible') ) {

					// remove class from parent
					$parent.removeClass('mask-parent');
					
					// Hide the mask
					$mask.hide();

				// The loading div's not been created yet	
				// Create the markup, insert into dom, position, then show	
				} else if ( !( $mask.length ) ) {
					
					// A random ID
					// We use this to asscocoiate the parent with its loading div
					var id =  Math.floor( Math.random() * 10000 ),
					
					// The HTML to insert
					mask_template = '<div class="mask" id="loading_' + id + '"><div class="mask-bg"></div><p class="mask-msg">'  + 
                        ( options.image ? '<img src="' + options.image+'" />' : '') + 
                        ( options.text ? '<span>' + options.text + '</span>' : '') + 
                        '</p></div>';
					
					// Add a data attribute to the parent & fade the content that is loading out
					// this matches this parent to the id of the loading div
					$parent.addClass('mask-parent').attr('data-loading-id', id );
					
					// Add the loading div, give it an id & position it over the parent.
					$parent.prepend(mask_template);
					
                    $('#loading_' + id).show().find('.mask-bg').css({
                        'opacity' : options.opacity,
                        'background-color' : options.bgcolor
                    });						
								
				
				// The loading div exists but is hidden.
				// Position it then show	
				} else {
					
					// Fade the content that is loading out
					$parent.addClass('mask-parent');

					// Add the loading div, give it an id & position it over the parent.
					$mask.show();
					
					
				}

                if(options.func) { options.func();}

			});			
		},
    $.fn.hideMask = function () {
        // locate the active Cloak
        this.mask = jQuery('body').find('.mask').get();
           
        // if it exists.. hide it!
        if(this.mask) {
            jQuery('body').find('.mask').hide();
        }

  	}
})(jQuery);