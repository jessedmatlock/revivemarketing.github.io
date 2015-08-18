$(document).ready(function(){	
	
	$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
	$(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
	$(".callbacks").colorbox({
		onOpen:function(){ alert('onOpen: colorbox is about to open'); },
		onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
		onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
		onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
		onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
	});
	
	var featureSlider = $('#feature-slider');
	featureSlider.owlCarousel({
		themeClass: 'owl-theme', 
		baseClass: 'owl-carousel',
		itemClass: 'owl-item',
		activeClass: 'active',
		navContainerClass: 'owl-nav',
		video:true,
		autoplay: false,
		autoplayHoverPause: true, // pause on hover
		autoplaySpeed: false,
		callbacks: true, // enable callback events
		video: false, // Enable fetching YouTube/Vimeo videos.
		videoHeight: false, // Set height for videos.
		videoWidth: false, // Set width for videos.
		nestedItemSelector: false, // Use it if owl items are deep nasted inside some generated content. E.g 'youritem'. Dont use dot before class name.
		stageElement: 'div', // DOM element type for owl-stage.
		itemElement: 'div', // DOM element type for owl-item.
	    loop: false,
		slideBy: 1,
	    margin: 0,
        lazyLoad:true,
		navContainer: false, // Set your own container for nav.
		dotsContainer: false, // Set your own container for dots.
	    nav: false,
		dots: false,
		dotsEach: false, // show dots each X items
		responsiveClass: false, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element. Can be used to stylize content on given breakpoint.
	    responsive:{
	        0:{
	            items:1,
	            nav: false
	        },
	        480:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        1024:{
	            items:1
	        },
		    1280:{
	            items:1
	        },
	        1440:{
	            items:1
	        }
	    },
	//	onDragged: callback
	
	});
	function callback(event) {
	    // Provided by the core
	    var element   = event.target;         // DOM element, in this example .owl-carousel
	    var name      = event.type;           // Name of the event, in this example dragged
	    var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
	    var items     = event.item.count;     // Number of items
	    var item      = event.item.index;     // Position of the current item
	    // Provided by the navigation plugin
	    var pages     = event.page.count;     // Number of pages
	    var page      = event.page.index;     // Position of the current page
	    var size      = event.page.size;      // Number of items per page
	}
		
	featureSlider.on('changed.owl.carousel', function(event) {

	});
	
	$('.feature-next').click(function() {
	    featureSlider.trigger('next.owl.carousel');
	});
	
	// Go to the previous item
	$('.feature-prev').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    featureSlider.trigger('prev.owl.carousel', [300]);
	});
	
	// external pager for carousel 
	$('.pager a').on('click', function(event){
		event.preventDefault();
		var pagerIndex = $('.pager a').index(this);
		$('.pager a').removeClass('active');
		$(this).addClass('active');
	  	featureSlider.trigger('to.owl.carousel', [pagerIndex,300,true]);
	});
});  // end docready