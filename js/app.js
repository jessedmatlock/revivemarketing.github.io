$(document).ready(function(){
//
// GLOBAL CONFIG 
//
	//$('html, body').height($(document).height());

	$(document).foundation({
		accordion : {
			active_class: 'open',
			callback: function (){
				setSizes();
			}			
		},
		// highlight the selected event/case when that items action button is clicked, use .hasClass to exclude other drop-downs in .item from firing the selection function
		dropdown: {
			opened: function(){ 
				if( $(this).prev('.button').hasClass('action') && !$(this).prev('.button').hasClass('cases') && $(this).closest('.item').length){
					$(this).closest('.item').find('.item-select-checkbox').prop('checked', true).change();
				}
			},
			closed: function(){
				if( $(this).prev('.button').hasClass('action') && $(this).closest('.item').length){
					$(this).closest('.item').find('.item-select-checkbox').prop('checked', false).change();
				}
			}
		},
		tab: {
			callback : function (tab) {			
			},
			toggled: function(){
				$(document).foundation('reflow');					
			},
	        //deep_linking:true,
	        //scroll_to_content: false			
			
		},
		reveal: {
			close_on_background_click: false,
		    close_on_esc: false,
		    dismiss_modal_class: 'close-reveal-modal, .close-modal'
		}
	});
	
	// scroll tabs to top after opening via hashtag
	// check for hashtag
	if(window.location.hash){
		// save it ti a var
		hash = window.location.hash,
		// assign tab that matched hashtag to var
		tabber = $('dl.tabs dd').find('a[href='+hash+']');
		// if we've got a tab with the hashtag as href
		if(tabber.length){
			// CLICK IT !
            tabber.click();
			// Then, scroll the window to it, minus 65px to account for the fixed header
			$(window).scrollTo(tabber, 500, {offset: -65});
		}
	}
	
	// for dropdown menus ITEMS, that won't close the dropdown on click
	$('[data-dropdown-content] a').on('click', function() {
		var id = $(this).closest('ul').attr('id');
		$('[data-dropdown=' + id + ']').trigger('click');
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
	

	
	// QTIP INIT AND CONFIG
	
	// init tooltips and positioning classes
	$(document).on('mouseenter', '[data-tooltip], .has-tip', function(event) {
	
		var posMy = 'top center', 
			posAt = 'bottom center';
	
		if( $(this).is('.tip-top') ){ posMy = 'bottom center';posAt = 'top center';}
		if( $(this).is('.tip-right') ){ posMy = 'left center';posAt = 'right center';}
		if( $(this).is('.tip-bottom') ){ posMy = 'top center';posAt = 'bottom center';}			
		if( $(this).is('.tip-left') ){ posMy = 'right center';posAt = 'left center';}
	
		if( $(this).is('.tip-top-right') ){ posMy = 'bottom left';posAt = 'top right';}
		if( $(this).is('.tip-bottom-right') ){ posMy = 'top left';posAt = 'right bottom';}
		if( $(this).is('.tip-top-left') ){ posMy = 'right bottom';posAt = 'top left';}			
		if( $(this).is('.tip-bottom-left') ){ posMy = 'right top';posAt = 'left bottom';}
	
	
	    $(this).qtip({
	        style: { classes: 'wgv-tooltip' },
	        overwrite: false, // Don't overwrite tooltips already bound
	        show: {
	            event: event.type, // Use the same show event as the one that triggered the event handler
	            ready: true, 
	            // Show the tooltip as soon as it's bound, vital so it shows up the first time you hover!,
	         solo: true
	        },
			hide: {
				when: { event: 'click mouseleave' },
				effect: { type: 'slide' }
			},
	        position: {
	            my: posMy,
	            at: posAt,
	            target: $(this), // my target
	  			container: $('body'),
	            viewport: true,
				adjust: {
					method: 'flip',
					resize: true,
					scroll: true // Can be ommited (e.g. default behaviour)  // Position my top left...
				},
	
	        }
	    }, event); // Pass through our original event to qTip
	});
	
	$(document).on('click', '[data-tooltip]', function(event) {
		$(".qtip").hide();
	});
		
	
		var importCheckboxes = $('#import-modal .import-select input[type=checkbox]');
			importCheckboxes.change(function(event) {
				var parentItem = $(this).closest('.import-item');
			
				if (this.checked) {
					parentItem.addClass('selected');
				} else {
					parentItem.removeClass('selected');
					$(this).prop('checked', false);
				}
				
			});
		
		
		
		
	
		// disable Bulk Actions drop down
		// capture checkbox change events and trigger selection of events/cases
		var checkboxes = $("#main-content .item-select-checkbox");

		$("#bulkActions").attr('disabled', 'disabled');
		
		checkboxes.change(function(event) {
			var parentItem = $(this).closest('.item');
							
			if (this.checked) {
		    	parentItem.addClass('selected');
			} else {
				parentItem.removeClass('selected');
				$('#select-all').prop('checked', false);
				$(this).prop('checked', false);
			}
			
//			if( $(this).hasClass('linked-events-checkbox')){
//				$(this).closest('.export-item').next('.linked-events').find('.item-select-checkbox').prop('checked', this.checked).change();
//			}
			
			if(checkboxes.filter(':checked').length > 1){				
				$("#bulkActions").removeAttr('disabled').trigger("chosen:updated");
			} else {
				$("#bulkActions").attr('disabled','disabled').trigger("chosen:updated");
			}
			
		}).change();
		
		
		// click select all checkbox to select all events/cases
		 $('#select-all').change(function() {  //on click
			$("#main-content .item-select-checkbox").prop('checked', this.checked).change();
		});
		
		 $(".item.event-item .button.action, .item.case-item .button.action").click(function(event) {  //on click
			$('#select-all').removeAttr('checked').change();					
		});			
		
		
			
	if( $('.main-section').hasClass('fix-header') ){
	
		var fixedHeader = function(){  
		
			var fixedHeaderTop = $('#fixed-header').length ? $('#fixed-header').offset().top : '',
				windowHeight = $(window).height(),
				windowWidth = $(window).width(),
				searchbarHeight = $('.search-sidebar-offcanvas').outerHeight() + 200,
				scrollTop = $(document).scrollTop();  
			
				// STICKY HEADER & SIDEBAR
				if (fixedHeaderTop !== '' && scrollTop >= '80' && windowWidth > "1024") { 			
				    $('#content-wrapper').addClass('sticky'); 
				} else {  
				    $('#content-wrapper').removeClass('sticky');  			     
				}  
			};  
			fixedHeader();  
	
			$(window).scroll(function() {  
			    fixedHeader();  
			});  					
		}
	
			// adjust height of textarea.auto-height
		$(document).on( 'keyup', 'textarea.auto-height', function (e){
		    $(this).css('height', 'auto' );
		    $(this).height( this.scrollHeight );
		}).keyup();
		
	
		// control width and layout of fixed sidebar + content area
		var setSizes = function () {  
		
			// let's maintain the same height sidebars since we'll
			// control the content height based on theirs
			var sidebarHeight = 0;
	        $('.offcanvas-sidebar').each(function(){  
	            if($(this).height() > sidebarHeight){  
	            	sidebarHeight = $(this).height();  
	        	}
	        });
	        				
			var windowHeight = $(window).height(),
				docHeight = $(document).height(),
				windowWidth = $(window).width(),
				headerHeight = $('#header').innerHeight(),
				sidebarWidth = $('.offcanvas-sidebar').width(),
				fixedHeaderHeight = $('#content-header').innerHeight(),
				contentFilterHeight = $('#content-filter').height(),
				contentHeight = windowHeight - headerHeight;
			
			
		//$('#content-outer-wrapper').css('min-height', contentHeight);
		$('#content-wrapper, #device-grid').css('min-height', contentHeight);
			
		// set video height to max of 100% screen height.. 
		$('#video-wrapper.video-playback[data-view="fill"]  #event-video').css('max-height', contentHeight - 90);
		//	$('.select-records-count').html(contentHeight);				
	
			// simulate maintaining aspect ratio - native in JW Player
			//$("#video-wrapper > .row > .panel").css('min-height',Math.round(($("#event-video").width()/16)*9) +'px');
		
		};
		
		setSizes();  //call the function now
		
		$(window).resize(function(){
		   setSizes();  //call the function on resize
		});  //set the function to resize
		
		
	
	// add search field only to select elements with .select-searchable class	
	$('.select').each(function(){	
		if(!$(this).hasClass('select-searchable')){
			$(this).chosen({inherit_select_classes: true, disable_search: true});
		} else {
			$(this).chosen({inherit_select_classes: true});
		
		}
	});
	
	// init global modal code, controlled by data attr of link element
	$('body').on('click','.open-modal',function(e) {
		e.preventDefault();
		
		var modal = $('#oo-modal'),
			targeturl = $(this).data('target-url'),
	    	modaltitle = $(this).data('modal-title'),
	    	modalclass = $(this).data('modal-class'),
	        buttonid = $(this).data('button-id'),
	        buttontxt = $(this).data('button-txt'),
			modalmsg = $(this).data('modal-msg'),
			newbutton = $(this).data('new-button'),
			newbuttonclass = $(this).data('new-button-class');
	
			if(targeturl !== ''){
				$.ajax({
					url: targeturl,
					dataType: "html",
					cache: false
				}).done(function( response ) {
					// now, let's load the HTML returned from the AJAX call
					modal.find('.modal-body').empty().html(response);
	
					//set the text of the modal title
			        modal.find('.modal-title').html(modaltitle);
	
					//add class to modal, if needed, to override modal size/placement
					modal.addClass(modalclass);
	
	
			        // set the button.modalsave id so we can target the click function of it.
					if(buttonid !== '' || buttontxt !== ''){
						modal.addClass('show-footer');
						modal.find('.modalsave').attr("id",buttonid); 
	
						// set the text of the save button
				        modal.find('.modalsave').html(buttontxt);				         				        
					}		            
					modal.foundation('reveal','open');
							
				}).fail( function( response ) {
					modal.find('.modal-body').empty().html("We're sorry, there was a problem loading your request. ERROR: "+ response);
					modal.foundation('reveal','open');					
				});
				
													
			} else if(modalmsg !== '') {
				
				// add modal msg to body if it exists
					modal.find('.modal-body').empty().html(modalmsg);
	
					//set the text of the modal title
			        modal.find('.modal-title').html(modaltitle);
	
					//add class to modal, if needed, to override modal size/placement
					modal.addClass(modalclass);
	
			        // set the button.modalsave id so we can target the click function of it.
					if(buttonid !== '' || buttontxt !== '' || newbutton !== ''){
						modal.addClass('show-footer');
						modal.find('.modalsave').attr("id",buttonid); 
	
						// set the text of the save button
						if(buttontxt !== ''){
				        	modal.find('.modalsave').html(buttontxt);				         				        
						}
						
						// add a new button to the footer, including text and class
						if(newbutton){
							button = $( ".modal-footer" ).prepend('<button class="button '+newbuttonclass+' modal-newbutton" aria-hidden="true">'+newbutton+'</button>');
						}
						
					}		            
					modal.foundation('reveal','open');																
	
			} // end if
			modal.find('.select').chosen();
			
			modal.on('closed', function(){ 
				modal.removeClass(modalclass).removeClass('show-footer');					
				modal.find('.modal-title').html('');
				modal.find('.modal-newbutton').remove();
				modal.find('.modalsave').html('Save').removeAttr("id");
				$('.reveal-modal-bg').hide();
			}); // end on close
	
	}); // end oo-modal click function
	
	
	
//
// EVENT PAGE ONLY
//	
	
	// simulate showing/hiding the Location Search criteria fields when user clicks edit link. Rest is controlled in CSS
	$('.section-data-toggle').on('click',function(){
//	    $(this).closest('.section-data').toggleClass('active');
			$('#dynamics-modal').foundation('reveal','open');

	});
	
	$('.collapsible-section').on('change', function(){
		if($(this).find('input').is(':checked')){
			$(this).next('.section-data').show().find('.section-data-toggle').click();
		} else {
			$(this).next('.section-data').hide();
		}
	});
	
	// simulate the multiple officer selection and edit functions
	$('.select-officer-search').on('change', function(){
	    if($(this).children(":selected").html() == "Multiple Officers"){
			$('#select-officer-search-modal').foundation('reveal','open');
	    }
	});

$(document).on("click","#select_officer_search_chosen li.result-selected",function(){
			$('#select-officer-search-modal').foundation('reveal','open');
	});
	
	// lets pop the modal if they click the edit button,
	// since we can't get the Chosen select to re-pop the modal when clicking an already active option
//	$('.edit-search-param').on('click', function(){
//		$('#select-officer-search-modal').foundation('reveal','open');
//	});
//	 
	// simulate clearing all the selected officers using button in modal
	// clear the list !
	$('#clear-multi-officer-selection').on('click', function(){
	    $('.multi-officer-search option:selected').prop('selected', false).trigger("chosen:updated");
	});
	
	
	// click logo for example of a visual tutorial - aka. Foundations Joyride
	$('#logo').on('click', function(){
		var step = 1;
		$('#desktop-joyride').foundation({
	  		joyride: {
				modal: false,
				post_step_callback: function (){
					step ++;
					//$('.select-records-count').html(step);
					
					if(step > '1' && step < '4'){
						$("#bulkActions_chosen").removeClass('chosen-disabled');
					} else {
						$("#bulkActions_chosen").addClass('chosen-disabled');
					}
				},				
				post_ride_callback : function () {
					$('#desktop-joyride').joyride('destroy');
				}
	  		}
		});
		$(document).foundation('joyride', 'start');
	});
	
		// simulate the search element clearing and search record number functions
		$('.edit-search-param, .clear-search-param').hide();
		
		$('.clear-search-param').on('click', function(){
			var parent = $(this).closest('label'),
				select = parent.next('.select, .select-searchable');
			
			//parent.find('.label').hide();
			select.prop("selectedIndex", 0).trigger("chosen:updated");
			$(this).hide();
//			parent.find('.edit-search-param, .clear-search-param').hide();
			
		});
		
		$('.sidebar-form .select').on('change', function(e) {
			$(this).trigger('chosen:updated');
			$(this).prev('label').find('.clear-search-param').show();
		});
		
		// simulate delete of saved search item
		// close modal AND delete related search item
		$('body').on('click', '.list-links .delete-link', function(){
			$(this).closest('li').fadeOut().remove();
		});
		$('body').on('click', '#cancel.button', function(){
			$('#oo-modal').foundation('reveal', 'close');
		});
		
		// simulate showing the title of the selected search in place of the
		// default 'Saved Searches' title for the dropdown.
		$('body').on('click', '#saved-search .search-link', function(){
			var newTitle = $(this).text();
			$(this).closest('#saved-searches').prev('.button').text(newTitle).trigger('click');
		});
	
//
// EVENT DETAILS PAGE (INCLUDING TABS)
//			
	$('.audit-toggle').on('click', function(){
		$(this).closest('.audit-event').toggleClass('active');
	});

    $('.tabs-content').each(function(){
    	$(this).find('> .content').equalHeights();
    	
    });
    	
	$('.eq-height-parent').each(function(){
		$(this).find('.eq-height-target').equalHeights();
		
	});
		
	
	// simulate the deletion of a case from the Cases tab
	
	$('.delete-attached-case').on('click', function(){
		$(this).closest('.item').next('.attachment-note').remove();
		$(this).closest('.item').fadeOut('slow').remove();
		
	});
	
	// auto focus input.copy-text, on click, to allow copy/paste more easily
	$('.copy-text').on('click', function(){
		$(this).focus().select();
	});

//
// CASES PAGE ONLY 
//
	// attachment upload modal form options
	$('.new-item-type-select').on('change', function(){
		var type = $(this).find(':selected').val(),
			forms = $(this).closest('.row').find('.new-item-type'),
			form = $(this).closest('.row').find('.new-item-type-'+type);

		forms.hide();
		form.show();
		
	});
	
	
	// file uploads - hide input[type=file], cause it's impossible to style,
	// overlay with button to control styling and trigger click on native file input
	$('.file-upload-trigger').on('click', function(){
		$(this).closest('.file-upload-form').find('input[type=file]').trigger('click');
	});
	
	
	

	// Delete case worker
	$('#case-worker-list .delete-case-worker').on('click', function(){
		$(this).closest('.case-worker').fadeOut('slow').remove();
	});
	
	// simulate adding case worker from modal	
	$('#add-case-worker-modal .modalsave').on('click', function(){
		var modal = $(this).closest('.reveal-modal'),
			caseWorker = modal.find('.case-worker-select option:selected').text(),
			perms = modal.find('.case-worker-perms-select  option:selected').text(),
			list = $('#case-worker-list'),
			template = '<li class="case-worker"><div class="case-worker-name">'+caseWorker+'</div><div class="case-worker-perms">'+perms+'</div><a href="javascript:void(0);"  class="edit-case-worker"><i class="fa fa-pencil"></i></a><a href="javascript:void(0);"  class="delete-case-worker"><i class="fa fa-times"></i></a></li>';	
		
		// add the worker to the list
		$(template).appendTo(list);
		
		// close that modal
		modal.foundation('reveal','close');																	
	});
	

//
// EVENT / CASE COMMON JS CODE
//
	// move the table columns outside of the table.. show on click
//	$("#table-columns").mouseup(function(e) {
//	  e.stopPropagation();
//	  
//	  showColumnsMenu($(this));
//	});
	
	
	// simulate the data binding of the Sort By select element and the asc/desc icons
	$('.select.data-options').on('change', function(){
	var icon1val = $(this).find('option:selected').data('icon1'),
		icon2val = $(this).find('option:selected').data('icon2'),
		options = $(this).closest('.labeled-control').next('.select-data-options'),
		icons = options.find('li .fa'),
		icon1 = options.find('li:first-child .fa'),
		icon2 = options.find('li:last-child .fa');							
		
		if(icon1val !== 'hide'){
			options.show();
			icons.removeClass();
			icon1.addClass('fa fa-'+icon1val);
			icon2.addClass('fa fa-'+icon2val);			
		} else {
			options.hide();
		}						
		
	});

	// simulating deletion of event/case/queue item
	$('body').on('click', '#main-content .delete-event', function(){
		$(this).closest('.item').fadeOut('fast');
	});

	// simulating expiring of event/case/queue item
	$('body').on('click', '#main-content .expire-event', function(){
	var item = $(this).closest('.item');
		item.addClass('expired');
			item.find('.expire-event').removeClass('expire-event').addClass('delete-event').html('<i class="fa fa-times"></i> Delete Shared Item</a>');

	});

	
	// simulate archiving an event/case item
	$('#main-content .archive-event').on('click', function(){
	var parent = $(this).closest('.item');
	
		parent.toggleClass('archived-item');
	
		if(parent.hasClass('archived-item')){
			$(this).html('<i class="fa fa-upload"></i> Restore Event');
		} else {
			$(this).html('<i class="fa fa-archive"></i> Archive Event');
		}	
	});
	
	// Simulate Archiving of event on Event Details Page
	$('#content-header .archive-event').on('click', function(){
	var parent = $(this).closest('#content-header');
	
		parent.toggleClass('archived-item');
	
		if(parent.hasClass('archived-item')){
			$(this).html('<i class="fa fa-upload"></i> Restore Event');
		} else {
			$(this).html('<i class="fa fa-archive"></i> Archive Event');
		}	
	});
	
	

	// show highlighted response when selecting checkbox in search form
	// example: Vehicle Dynamics options show highlighted feedback label	
	$('.collapsible-checkbox').on('change', function(){
		if($(this).find('input').is(':checked')){
			$(this).next('.collapsible-checkbox-item').addClass('active');
		} else {
			$(this).next('.collapsible-checkbox-item').removeClass('active');
		}
	});
		        
	
	
	
	// control size of events/cases and table disable by adding/removing
	//  class on #content-wrapper div
	$('#view_control').change(function(){
		var viewSelection = $(this).val();
		$('#content-wrapper.row').removeClass().addClass('row view-'+viewSelection );
		if(viewSelection == 'table'){
			var caseColumns = [{
			    template: "<input type='checkbox' class='checkbox' />",
			    width: 20
			}, {
			    field: "CaseNumber",
			    title: "Case Number",
			    width: 100,
			    filterable: {
			        cell: {
			            showOperators: true
			        }
			    }
			    //format: "{0:MM/dd/yyyy}"
			}, {
			    field: "CreatedBy",
			    title: "Created By",
			    width: 125,
			    filterable: {
			        cell: {
			            showOperators: true
			        }
			    }
			    
			}, {
			    field: "CreatedOn",
			    title: "Created On",
			    width: 125,
			    filterable: {
			        cell: {
			            showOperators: true
			        }
			    }
			    
			}, {
			    field: "ModifiedOn",
			    title: "Modified On",
			    width: 125,
			    filterable: {
			        cell: {
			            showOperators: true
			        }
			    }
			    
			}, {
			    field: "Events",
			    title: "Events",
			    width: 60,
			    filterable: {
			        cell: {
			            showOperators: true
			        }
			    }
			    
			}, {
			    field: "Links",
			    title: "Links",
			    width: 60,
			    filterable: {
			        cell: {
			            showOperators: true
			        }
			    }
			    
			}, {
			    field: "Files",
			    title: "Files",
			    width: 60,
			    filterable: {
			        cell: {
			            showOperators: true
			        }
			    }
			    
			}, {
			    command: [{
			        name: 'action',
			        template: kendo.template($("#command-template").html()),
			        click: function(e) {
			            //e.preventDefault();
			            alert('Dropdown to be implemented in LIVE APP');
			        }
			    }],
			    title: " ",
			    width: 50
			}];
			var caseData = [{
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}, {
			    CaseNumber: "654789123",
			    CreatedBy: "John B. Good",
			    CreatedOn: "01/09/14 10:13:12",
			    ModifiedOn: "01/09/14 10:13:12",
			    Events: "4",
			    Links: "2",
			    Files: "1"
			
			}];
			
			var eventColumns = [{ template: "<input type='checkbox' class='checkbox' />", width: 30 },
		        {
		            field: "RecordedDate",
		            title: "Recorded Date",
		            width: 150,
		            //format: "{0:MM/dd/yyyy}"
		        },
		        {
		            field: "Officer",
		            title: "Officer",
		            width: 120
		        },
		        {
		            field: "Vehicle",
		            title: "Vehicle",
		            width: 110
		        },
		        {
		            field: "Category",
		            title: "Category",
		            width: 90
		        },
		        
				{
				    field: "Badge",
				    title: "Badge",
				    width: 100
				},
				{
				    field: "Duration",
				    title: "Duration",
				    width: 140
				},
				{
				    field: "FileSize",
				    title: "FileSize",
				    width: 100
				},
				{
				    field: "Cameras",
				    title: "Cameras",
				    width: 90
				},
				{
				    field: "EventStatus",
				    title: "Event Status",
				    width: 90
				},
		        {
		            field: "ImportSource",
		            title: "Import Source",
//			            format: "{0:MM/dd/yyyy}",
		            width: 100
		        },
		        {
		            field: "OrderID",
		            title: "Filesize",
		            width: 80
		        },
		        {
					command: [{ 
						name: 'action',
						template: kendo.template($("#command-template").html()),
				        click: function(e) {
			        		//e.preventDefault();
				        	alert('Dropdown to be implemented in LIVE APP');
				        }
			       }],
					title: " ", 
					width: 50                     
				}
		    ];
			var eventData = [
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			  { RecordedDate: "01/09/14 10:13:12", Officer: "John B. Good", Vehicle: "unknown", Category:"", Badge: "1231", Duration: "00:00:12", FileSize: "198.57MB", Cameras: "3", EventStatus: "Offline", ImportSource: "USB",  ImportedDate:"01/10/14 14:08:58",RecordStop: "01/09/14 10:14:13", Restricted: "no", KeepOnline: "no", EventID: "00:1d:96:00:7a:59-317926750"},
			];
			
			if( $(this).hasClass('case-data') ) {
				dataSet = caseData;
				columns = caseColumns;
			} else {
				dataSet = eventData;
				columns = eventColumns;
			}
		
			var grid = $("#grid").kendoGrid({
			    dataSource: {
			    	data: dataSet,
			    	serverFiltering: true,			    	
			        schema: {
			            model: {
			                fields: {   
				                ProductID: {
				                	editable: false,
				                	nullable: true
				                },                      
			                    RecordedDate: { type: "string" },           
			                    Officer: { type: "string" },
			                    Vehicle: { type: "string" },
			                    Category: { type: "string" },
			                    Badge: { type: "string" },
			                    Duration: {type: "string" },
			                    FileSize: { type: "string" },
			                    Cameras: { type: "string" },
			                    EventStatus: { type: "string" },
			                    ImportSource: { type: "string" },
			                    ImportedDate: { type: "date" },
			                    RecordStop: { type: "date" },
			                    Restricted: { type: "string" },
			                    KeepOnline: { type: "string" },
			                    EventID: { type: "string" }
			                }
			            }
			        }
			    },
//			    columnResizeHandleWidth: 16,			    
			    height: $(document).height() - 400,
			    serverFiltering: true,			    
				filterable: {
				    mode: "row"
				},
				sortable: {
				    mode: "single"
				},	
//				columnMenu: {
//					sortable: false,
//					messages: {
//					  columns: "Choose columns"
//					}
//				},
//			    reorderable: true,
//			    resizable: true,
			    pageable: false,
//			    pageable: {
//			    	pageSize: 25,			    	
//			        refresh: true,
//			        pageSizes: [25,50,100],
//			        buttonCount: 5,
//			        input: true,
//			       	messages: {
//			       	  itemsPerPage: "Events per page"
//			       	} 
//			       
//			    },
  				dataBound: onDataBound,
			    columns: columns
			}).data("kendoGrid");  
			//bind click event to the checkbox
			
			$("#select-all").on("click", function () {
			    grid.table.find("td .checkbox").trigger("click");
			});
			
			grid.table.on("click", ".checkbox" , selectRow).trigger("change");


			// lets hide all but the first column menu (on the second column	
			grid.thead.find("th").slice(2).find("> .k-header-column-menu").remove();
			      
		}
	});
		
		
//
// QUEUE PAGE
//
		

	
//
// EXPORT PAGE ONLY
//

	// TRISTATE CHECKLIST

	// catch changes to child checkboxes and fire .change() on load
	$('[data-checklist-options] :checkbox').change(function(){
	    
	    // create var for parent ID and target .checkall checkbox
	    var parentID = $(this).closest("ul").attr('id'),
	        checkall =  $("[data-checklist='"+ parentID + "']");
	    
	    // do we have some checked? Some unchecked? Store as boolean variables
	    var someChecked = $(this).closest('ul').find(":checkbox:checked").length > 0;
	    var someUnchecked = $(this).closest('ul').find(":checkbox:not(:checked)").length > 0;
	
	    // if we have some checked and unchecked, set checkall to indeterminate
	    // If all are checked, set checkall to checked
	    checkall.prop("indeterminate", someChecked && someUnchecked);
	    checkall.prop("checked", someChecked || !someUnchecked);
	        
	// fire change() when this loads to ensure states are updated on page load
	}).change();
	
	// clicking checkall will check all children checkboxes under it
	$('[data-checklist]').click(function() {
	    var checklist = $(this).data('checklist');
	    $('#'+checklist).find(':checkbox').prop('checked', this.checked);    
	});
	



	
	// show/hide the CC field for share exports, on check of checkbox
	$("#recipient-cc-offcanvas").hide();
	$('#add-cc-offcanvas').on('change', function(){
		if(this.checked){
			$("#recipient-cc-offcanvas").show();
		} else {
			$("#recipient-cc-offcanvas").hide();
		}
	});
	
	// toggle export worksheet media/share forms based in tab selection
	// NOTE: tabs are radio buttons (visually hidden) that trigger the show/hide of the forms
	$('.link-tab').on('click', function(){
		var showPane = $(this).attr('id') + '-active';
		
		$('.export-sidebar-oncanvas').removeAttr('id').attr('id',showPane);
		
		$('.export-sidebar-oncanvas').find('.link-tab').removeClass('active');
		$(this).addClass('active');
	});


	// simluate the removal of cases/events from the Export Worksheet when clicking X
	$('.item .action.soft-alert').on('click', function(){
		var item = $(this).closest('.item');
			item.fadeOut('slow');
	});


	// show other recipient email field if user unchecks 'I am the recipient' checkbox on Share export form
	$('#recipient-checkbox').on('change', function(){
		if (!this.checked) {
	    	$("#other-recipient").show();
		} else {
	    	$("#other-recipient").hide();
		}
	});
	
	$('.select-records-count').click(function(){
		$('#system-msg').removeClass().addClass('info show');
	});
	
	$('#system-msg').on('click', function(){
		if( $(this).hasClass('info') ){
			$(this).removeClass('info').addClass('error');
		} else if($(this).hasClass('error') ) {
			$(this).removeClass('error').addClass('alert');
		} else if($(this).hasClass('alert') ) {
			$(this).removeClass('alert').addClass('success');
		} else {
			$(this).removeClass('show').removeClass();
		}
	});
		
	// this function adds a number to each of the items on the screen, so users can easily discern the order in which they appear, etc.
	$('.item:visible:not(.linked-events .item)').each(function(index){
		var count = index+1,
		showCount = '<div class="count-wrap">'+count+'</div>';
		$(this).find('.item-select').disableSelection().prepend(showCount);
	});		
			
}); // end docready


//
// MISC FUNCTIONS
//

// move the native telerik grid Column Selector element to below the 'Columns' button in the header...
function showColumnsMenu (button) {
  $("#grid .k-header-column-menu:first").click();
	  var offset = button.offset();
	  $(".k-column-menu")
	    .parent()
	    .css({
	      top: offset.top + button.outerHeight(),
	      left: offset.left
	    });
	}
	var checkedIds = {};
	//on click of the checkbox:
	function selectRow() {
		var checked = this.checked,
			row = $(this).closest("tr"),
			grid = $("#grid").data("kendoGrid"),
			dataItem = grid.dataItem(row);
		checkedIds[dataItem.id] = checked;
		if (checked) {
			//-select the row
			row.addClass("k-state-selected");
		} else {
			//-remove selection
			row.removeClass("k-state-selected");
		}
	}
//on dataBound event restore previous selected rows:
function onDataBound(e) {
	var view = this.dataSource.view();
	for(var i = 0; i < view.length;i++){
		if(checkedIds[view[i].id]){
			this.tbody.find("tr[data-uid='" + view[i].uid + "']")
				.addClass("k-state-selected")
				.find(".checkbox")
				.attr("checked","checked").trigger("change");
		}
	}			
}
(function($) {

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.css('min-height', maxHeight);
    };

    // auto-initialize plugin
    $('[data-equal]').each(function(){
        var $this = $(this),
            target = $this.data('equal');
        $this.find(target).equalHeights();
    });

})(jQuery);


(function($) {
    $.fn.matchHeight = function(byRow) {
        // handle matchHeight('remove')
        if (byRow === 'remove') {
            var that = this;
            // remove fixed height from all selected elements
            this.css('height', '');
            // remove selected elements from all groups
            $.each($.fn.matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });
            // TODO: cleanup empty groups
            return this;
        }
        if (this.length <= 1)
            return this;
        // byRow default to true
        byRow = (typeof byRow !== 'undefined') ? byRow : true;
        // keep track of this group so we can re-apply later on load and resize events
        $.fn.matchHeight._groups.push({
            elements: this,
            byRow: byRow
        });
        // match each element's height to the tallest element in the selection
        $.fn.matchHeight._apply(this, byRow);
        return this;
    };
    $.fn.matchHeight._apply = function(elements, byRow) {
        var $elements = $(elements),
            rows = [$elements];
        // get rows if using byRow, otherwise assume one row
        if (byRow) {
            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';
                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px'
                });
            });
            // get the array of rows (based on element top position)
            rows = _rows($elements);
            // revert the temporary forced style
            $elements.css({
                'display': '',
                'padding-top': '',
                'padding-bottom': '',
                'border-top-width': '',
                'border-bottom-width': '',
                'height': ''
            });
        }
        $.each(rows, function(key, row) {
            var $row = $(row),
                maxHeight = 0;
            // ensure elements are visible to prevent 0 height
            var hiddenParents = $row.parents().add($row).filter(':hidden');
            hiddenParents.css({
                'display': 'block'
            });
            // iterate the row and find the max height
            $row.each(function() {
                var $that = $(this),
                    display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';
                // ensure we get the correct actual height (and not a previously set height value)
                $that.css({
                    'display': display,
                    'height': ''
                });
                // find the max height (including padding, but not margin)
                if ($that.outerHeight(false) > maxHeight)
                    maxHeight = $that.outerHeight(false);
                // revert display block
                $that.css({
                    'display': ''
                });
            });
            // revert display block
            hiddenParents.css({
                'display': ''
            });
            // iterate the row and apply the height to all elements
            $row.each(function() {
                var $that = $(this),
                    verticalPadding = 0;
                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }
                // set the height (accounting for padding and border)
                $that.css('height', maxHeight - verticalPadding);
            });
        });
        return this;
    };
    /*
     * _applyDataApi will apply matchHeight to all elements with a data-match-height attribute
     */
    $.fn.matchHeight._applyDataApi = function() {
        var groups = {};
        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-match-height');
            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });
        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };
    /*
     * _update function will re-apply matchHeight to all groups with the correct options
     */
    $.fn.matchHeight._groups = [];
    $.fn.matchHeight._throttle = 80;
    var previousResizeWidth = -1,
        updateTimeout = -1;
    $.fn.matchHeight._update = function(event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === previousResizeWidth)
                return;
            previousResizeWidth = windowWidth;
        }
        // throttle updates
        if (updateTimeout === -1) {
            updateTimeout = setTimeout(function() {
                $.each($.fn.matchHeight._groups, function() {
                    $.fn.matchHeight._apply(this.elements, this.byRow);
                });
                updateTimeout = -1;
            }, $.fn.matchHeight._throttle);
        }
    };
    /*
     * bind events
     */
    // apply on DOM ready event
    $($.fn.matchHeight._applyDataApi);
    // update heights on load and resize events
    $(window).bind('load resize orientationchange', $.fn.matchHeight._update);
    /*
     * rows utility function
     * returns array of jQuery selections representing each row
     * (as displayed after float wrapping applied by browser)
     */
    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];
        // group elements by their top position
        $elements.each(function() {
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;
            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }
            // keep track of the last row top
            lastTop = top;
        });
        return rows;
    };
    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };
})(jQuery);



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