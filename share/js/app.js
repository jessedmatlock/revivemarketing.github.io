jQuery(document).ready(function($){
//
// GLOBAL CONFIG 
//
	$(document).foundation({
		accordion : {
			active_class: 'open',
			callback: function (){
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
	
	
	// highlight the selected stream and scroll window to top and play it.
	var timer;
	$('.share-stream').on('click', function(){
		item = $(this);
		clearTimeout(timer);
		// clear .active class from all others, apply to clicked - provides styling for actively playing stream
		$(this).closest('#share-items').find('.active').removeClass('active');
		$(this).addClass('active');
		
		// wait until our classes are applied and then scroll the window, just so the top of the player is at top of screen
		timer = setTimeout(function() {
			  $("html, body").animate({ scrollTop: 220 }, "slow");
		}, 250);					
	});
	
		// loading button simulation
		$(document).on('click', '.anim-button', function(){
			// apply the data attributes to the button, eg. data-original="Save Changes" data-active="Saving ..." and add the class .anim-button to init the function
			var button = $(this),
				original = button.attr('data-original', button.html()),
				active = $(this).data('active') ? $(this).data('active') : 'Processing';
				// set original content to data attr
				button.data("original", button.html());		
			if(original !== ''){
				button.html('<i class="fa fa-refresh fa-spin"></i> '+ active);
				setTimeout(function() {
					button.html(button.data("original"));
				}, 2000);				
			}
		});
		
	
	// add search field only to select elements with .select-searchable class	
	
	$('select.select').each(function(){	
		if(!$(this).hasClass('select-searchable')){
			$(this).chosen({inherit_select_classes: true, disable_search: true});
		} else {
			$(this).chosen({inherit_select_classes: true});
		}
	});
	
	// global msg box init
	$('a[data-msgbox]').on('click', function(){
		var msgtype = $(this).attr('data-msgbox');
		$.msgbox('This is a '+msgtype+ ' type msg box example', {type:msgtype}); 
		
	});
	
	// global class to fire click function to open previously appended Global Modal, use data-modal value to populate URL for ajax call
	$('.global-modal').on('click', function(){
		var $this = $(this),
		        partial = $this.attr('data-modal');
		$('#global-modal').foundation('reveal', 'open', {
		    url: partial,
		    success: function(data) {
		        //alert('loaded');
		
			// LAME fix for select elements in modal NOT being styled when modal opens.. have to fire style, only on selects that HAVE NOT already been styled.. after modal opens
				setTimeout(function() {
					$('select.select').each(function(){	
						$(this).chosen({inherit_select_classes: true, disable_search: true});
					});			
				}, 250);
		
		    },
		    error: function() {
		        //alert('ah crud..');
		    }
		});
	});

}); // end docready