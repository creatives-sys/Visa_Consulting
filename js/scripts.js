(function ($) {
  "use strict";
	/*-------------------------------------
		Animation on scroll: Number rotator
	-------------------------------------*/
	$("[data-appear-animation]").each(function() {
		var self      = $(this);
		var animation = self.data("appear-animation");
		var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);{ 
			self.html('0');
			self.waypoint(function(direction) {
				if( !self.hasClass('completed') ){
					var from     = self.data('from');
					var to       = self.data('to');
					var interval = self.data('interval');
					self.numinate({
						format: '%counter%',
						from: from,
						to: to,
						runningInterval: 2000,
						stepUnit: interval,
						onComplete: function(elem) {
							self.addClass('completed');
						}
					});
				}
			}, { offset:'85%' });
		}
	});

    /*-------------------------------------
    Swiper Slider
    -------------------------------------*/
    var swiperslider = $(".swiper-slider");
	var x = 1;
	swiperslider.each(function () {  
				var carouselElement	= $(this);
				var columns = $(this).data('columns');
				var loop = $(this).data('loop');
				var autoplay2 = $(this).data('autoplay');
				var autoplayspeed1 = $(this).data('autoplayspeed');
				var val_nav = $(this).data('arrows');
				var nav_arrow = $(this).data('arrows-class');                
				var val_dots = $(this).data('dots');
				var val_center = $(this).data('center');
				var style = $(this).data('effect');
				var allowTouch = $(this).data('allow-touch');
				var loopSlide = null;
				var sl_speed = 3000; 

				carouselElement.addClass( 'pbmit-element-viewtype-carousel-' + x );


				if( columns === 1 ){ 
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '1', /* 767 : */ '1', /* 575 : */ '1', /* 0 : */ '1' ];
				} else if( columns === 2  ||  columns == 2.6 ){ 
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 3 ){
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '1', /* 0 : */ '1' ];
				} else if( columns === 3 ||  columns == 3.6 ){
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2.3', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 4 ){
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 5 ){
					var responsive_items = [ /* 1199 : */ '5', /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 6 ){
					var responsive_items = [ /* 1199 : */ '6', /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
				} else {
					var responsive_items = [ /* 1199 : */ '3', /* 991 : */ '3', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
				}

				if (val_dots === true) {
					carouselElement.append('<div class="swiper-pagination swiper-pagination"></div>');
				}

				if(val_nav === true){
					
					if(!nav_arrow){
					carouselElement.append( '<div class="swiper-buttons"></div>' );
					carouselElement.find('.swiper-buttons').append( '<div class="swiper-button-next swiper-button-next-' + x + '"></div>' );
					carouselElement.find('.swiper-buttons').append( '<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>' );
					} else{             
					$('.' + nav_arrow).append( '<div class="swiper-buttons"></div>' );
					$('.' + nav_arrow).append( '<div class="swiper-button-next swiper-button-next-' + x + '"></div>' );
					$('.' + nav_arrow).append( '<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>' );
					}
				}

				var pagination_val = false;
				if (val_dots === true) {

					if(carouselElement.hasClass('pbmit-sep-number')){ 
						pagination_val = {
							el: '.swiper-pagination',
							type :'fraction',
						};
					} else{
						pagination_val = {
						el: '.swiper-pagination',
						clickable: true,
					};
						}
					}
				var navigation_val = false;
				if(val_nav === true){
					navigation_val =  {
					nextEl: '.swiper-button-next-' + x,
					prevEl: '.swiper-button-prev-' + x,
					};
				}

				if(!style){
					style = "slide";
				}    
				
				var margin_val = 30;
				if( $(carouselElement).data('margin') !== '' || $(carouselElement).data('margin') === '0'){
					margin_val = $(carouselElement).data('margin');  
				} 
				
				if(carouselElement.hasClass('marquee')){ 
					var reverse_direction = $(this).data('reverse');
					if (!reverse_direction) reverse_direction = false;
					var swiper2 = new Swiper( '.pbmit-element-viewtype-carousel-' + x, { 
						spaceBetween: 0,
						centeredSlides: true,
						speed: 10000,
						autoplay: {
							delay: 1,
							disableOnInteraction: true,
							reverseDirection: reverse_direction,
						},
						loop: true,
						slidesPerView: 'auto',
						allowTouchMove: false,
						disableOnInteraction: true
					});
				} else{   
					if(autoplay2){
						autoplay2 = { delay: 5500 };
					}                  
				var swiper = new Swiper( '.pbmit-element-viewtype-carousel-' + x, { 
					loop: loop, 
					navigation: navigation_val,
					pagination: pagination_val,
					slidesPerView: columns,
					spaceBetween: margin_val,
					loopedSlides: loopSlide, 
					autoplay : autoplay2,
					effect: style,
					speed: sl_speed, 
					grabCursor: false,
					centeredSlides: val_center,
					allowTouchMove: allowTouch,
					breakpoints		  : {
					1199 : {
						slidesPerView	: responsive_items[0],
					},
					991	 : {					
						slidesPerView	: responsive_items[1],
					},
					767	 : {
						slidesPerView	: responsive_items[2],
					},
					575	 : {
						slidesPerView	: responsive_items[3],
					},
					0	 : {
						slidesPerView	: responsive_items[4],
					}
					}
				});
			}
		x = x + 1;             
	}); 

	/*-------------------------------------
	ProgressBar
	-------------------------------------*/
	AOS.init({
		once: true,
	});

	/*-------------------------------------
	Scroll To Top
	-------------------------------------*/

	var pbmit_back_to_top = function() {
		var toggleHeight = jQuery(window).outerHeight() * 2;
		jQuery(window).scroll(function() {
			if (jQuery(window).scrollTop() > toggleHeight) {
				//Adds active class to make button visible
				jQuery(".pbmit-backtotop").addClass("active");
			} else {
				//Removes active class to make button visible
				jQuery(".pbmit-backtotop").removeClass("active");
			}
		});
		//Scrolls the user to the top of the page again
		jQuery(".pbmit-backtotop").on('click',function() {
			jQuery("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}
	pbmit_back_to_top();

	/*-------------------------------------
		tooltip
	-------------------------------------*/
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

	/*-------------------------------------
	Sticky header wrapper
	-------------------------------------*/
	if( jQuery('.site-header-menu-wrapper').length == 0 ){
		jQuery('.site-header-menu').wrap('<div class="site-header-menu-wrapper"></div>');
		}
		jQuery('.site-header-menu-wrapper').height( jQuery('.site-header-menu-wrapper').height() ).css('margin-bottom', jQuery('.site-header-menu').css('margin-bottom') );

		jQuery(window).resize(function(){
		if( jQuery(window).width() < 1200 ){
			jQuery('.site-header-menu-wrapper').css('height', '');
			jQuery('.site-header-menu-wrapper').css('margin-bottom', '');
		} else {
			jQuery('.site-header-menu-wrapper').height( jQuery('.site-header-menu-wrapper').height() ).css('margin-bottom', jQuery('.site-header-menu').css('margin-bottom') );
		}
		
	});

	/*-------------------------------------
	Magnific Popup
	-------------------------------------*/
	var i_type = 'image';
	$('.pbmin-lightbox-video, .pbmin-lightbox-video a, a.pbmit-lightbox').each(function(){
		if( $(this).hasClass('pbmin-lightbox-video')){ 
			i_type = 'iframe';
		} else {
			i_type = 'image';
		}  
		$(this).magnificPopup({type:i_type});
	});   

	/*-------------------------------------
	Accordion
	-------------------------------------*/

	$('.accordion .accordion-item').on('click', function () { 
		var e = $(this);  
		$(this).parent().find('.accordion-item').removeClass('active');        
		if(!$(this).find('.accordion-button').hasClass('collapsed')){
		$(this).addClass('active');
		}  
	}); 

    /*-------------------------------------
    Sortable Div
    -------------------------------------*/

    jQuery('.pbmit-sortable-yes').each(function(){ 
		var boxes = jQuery('.pbmit-element-posts-wrapper', this ); 
		var links = jQuery('.pbmit-sortable-list a', this ); 
		boxes.isotope({ animationEngine : 'best-available'}); 
		links.on('click', function(e){  
		  var selector = jQuery(this).data('sortby'); 
		  if( selector != '*' ){ 
			var selector = '.' + selector; 
		  } 
		  boxes.isotope({ filter : selector, itemSelector : '.pbmit-ele', layoutMode : 'fitRows' }); 
		  links.removeClass('pbmit-selected');
		  jQuery(this).addClass('pbmit-selected');
		  e.preventDefault(); 
		});
	}); 

	/*-------------------------------------
    Stretched Div
    -------------------------------------*/ 	
	var document_width = $(document).width();
	function pbmit_col_stretched(){
		$('.pbmit-col-stretched-yes').each(function() {
			var this_ele = $(this);
			var window_width = jQuery(window).width();
			var main_width = $('.container').width();
			var extra_width = ((window_width - main_width) / 2);  
			if (window_width < 1200){
				extra_width = 0;
			}
			if (this_ele.hasClass('pbmit-col-right')) { 
				$('.pbmit-col-stretched-right', this_ele).css('margin-right', '-' + extra_width + 'px'); 
			} else { 
				$('.pbmit-col-stretched-left', this_ele).css('margin-left', '-' + extra_width + 'px'); 
			}
		});
	} 
	jQuery(window).on('resize', function() {
		pbmit_col_stretched();
	});
	pbmit_col_stretched();

	/*-------------------------------------
	Circle Progressbar
	-------------------------------------*/
	$('.pbmit-circle-outer').each(function() {
		var this_circle = $(this);

		// Circle settings
		var emptyFill_val = "rgba(0, 0, 0, 0)";
		var thickness_val = 10;
		var fill_val = this_circle.data('fill');
		var size_val = 115;

		if (typeof this_circle.data('emptyfill') !== 'undefined' && this_circle.data('emptyfill') !== '') {
			emptyFill_val = this_circle.data('emptyfill');
		}
		if (typeof this_circle.data('thickness') !== 'undefined' && this_circle.data('thickness') !== '') {
			thickness_val = this_circle.data('thickness');
		}
		if (typeof this_circle.data('size') !== 'undefined' && this_circle.data('size') !== '') {
			size_val = this_circle.data('size');
		}
		if (typeof this_circle.data('filltype') !== 'undefined' && this_circle.data('filltype') === 'gradient') {
			fill_val = { gradient: [this_circle.data('gradient1'), this_circle.data('gradient2')], gradientAngle: Math.PI / 4 };
		}

		if (typeof $.fn.circleProgress === "function") {
			var digit = this_circle.data('digit');
			var before = this_circle.data('before');
			var after = this_circle.data('after');
			var digit = Number(digit);
			var short_digit = (digit / 100);

			$('.pbmit-circle', this_circle).circleProgress({
				value: 0,
				size: size_val,
				startAngle: -Math.PI / 4 * 2,
				thickness: thickness_val,
				emptyFill: emptyFill_val,
				fill: fill_val
			}).on('circle-animation-progress', function(event, progress, stepValue) { // Rotate number when animating
				this_circle.find('.pbmit-circle-number').html(before + Math.round(stepValue * 100) + after);
			});
		}
		
		this_circle.waypoint(function(direction) {
			if (!this_circle.hasClass('completed')) {
				// Redraw when view
				if (typeof $.fn.circleProgress === "function") {
					$('.pbmit-circle', this_circle).circleProgress({ value: short_digit });
				};
				this_circle.addClass('completed');
			}
		}, { offset: '115%' });

	});

	/*-------------------------------------
    Contact form validator
    -------------------------------------*/
    if ( $.isFunction($.fn.validate) ) {
		$(".contact-form").each(function() {
			$(this).validate();
		});
	} 
  
	/*-------------------------------------
	Send email via Ajax
	Make sure you configure send.php file 
	-------------------------------------*/
	// Centrally configured Formspree ID.
	// Change this value to your actual Formspree ID (e.g. "xpzvobyd")
	// to update it across all forms on the website instantly.
	var defaultFormspreeId = "xpqnbpqj";

	$(".contact-form").submit(function(){
		var form = $(this);

		if( form.find(".doing-via-ajax").length == 0 ){
			form.prepend('<input class="doing-via-ajax" type="hidden" name="doing-via-ajax" value="yes" />');
		}
	
		if( !$.isFunction(form.valid) || form.valid() ){  // check if form is valid
	
			form.find(".message-status").html('');
			form.find('.form-btn-loader').removeClass('d-none');
			form.find('button.pbmit-btn span:not(.form-btn-loader)').hide();
			form.find('button.pbmit-btn').attr("disabled", "disabled");	
			
			var url = form.attr('action') || "send-mail.php";
			
			// Centrally replace placeholder ID with configured ID if needed
			if (url.indexOf("YOUR_FORM_ID") !== -1 && defaultFormspreeId !== "YOUR_FORM_ID") {
				url = "https://formspree.io/f/" + defaultFormspreeId;
			}

			var isFormspree = url.indexOf("formspree.io") !== -1;

			$.ajax( {
				type: "POST",
				url: url,
				data: form.serialize(),
				dataType: isFormspree ? "json" : "text",
				headers: isFormspree ? { 'Accept': 'application/json' } : {},
				success: function(cevap) {					
					form.find('.form-btn-loader').addClass('d-none');
					form.find('button.pbmit-btn span').show();
					form.find("button.pbmit-btn").removeAttr("disabled");
					
					if (isFormspree) {
						if (cevap && cevap.ok) {
							form.find(".message-status").html('<div class="alert alert-success mt-3" style="color: #155724; background-color: #d4edda; border-color: #c3e6cb; padding: 12px; border-radius: 4px;">Thank you! Your message has been sent successfully.</div>');
							form[0].reset();
						} else {
							form.find(".message-status").html('<div class="alert alert-danger mt-3" style="color: #721c24; background-color: #f8d7da; border-color: #f5c6cb; padding: 12px; border-radius: 4px;">Oops! There was a problem submitting your form.</div>');
						}
					} else {
						form.find(".message-status").html(cevap);
					}
				},
				error: function() {
					form.find('.form-btn-loader').addClass('d-none');
					form.find('button.pbmit-btn span').show();
					form.find("button.pbmit-btn").removeAttr("disabled");
					form.find(".message-status").html('<div class="alert alert-danger mt-3" style="color: #721c24; background-color: #f8d7da; border-color: #f5c6cb; padding: 12px; border-radius: 4px;">Oops! There was a problem submitting your form.</div>');
				}
			});			
		}	
		return false;
	
	});
  
	/*-------------------------------------
	Masonry
	-------------------------------------*/
	  if (jQuery('.pbmit-element-viewtype-masonry').length > 0) {
		  jQuery('.pbmit-element-viewtype-masonry').each(function() {  
			  var main_ele = jQuery(this); 			
			  // init Masonry
			  let $grid = jQuery('.pbmit-element-posts-wrapper', main_ele).masonry({				  
				  itemSelector: '.pbmit-blog-style-4,.pbmit-portfolio-style-1',
				  columnWidth: '.pbmit-blog-style-4,.pbmit-portfolio-style-1',
				  gutter: 0,
				  percentPosition: true,
				  stagger: 30,
				  // nicer reveal transition
				  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
				  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
				  horizontalOrder: true
			  });
			  
		  }
	  )};  
})($);

   