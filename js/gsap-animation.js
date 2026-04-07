(function ($) {
	"use strict";

	gsap.registerPlugin(ScrollTrigger, SplitText);
	gsap.config({
		nullTargetWarn: false,
		trialWarn: false
	});

	jQuery.fn.pbmit_is_bound = function(type) {
		if (this.data('events') !== undefined) {
			if (this.data('events')[type] === undefined || this.data('events')[type].length === 0) {
				return false;
			}
			return (-1 !== $.inArray(fn, this.data('events')[type]));
		} else {
			return false;
		}
	};

	/*----  Functions  ----*/
	function getpercentage(x, y, elm) { 
		elm.find('.pbmit-fid-inner').html(y + '/' + x);
		var cal = Math.round((y * 100) / x);
		return cal;
	}

	/* ====================================== */
	/* Title Animation
	/* ====================================== */
	function pbmit_title_animation() {
		ScrollTrigger.matchMedia({
			"(min-width: 1025px)": function() {
				var pbmit_var = jQuery('.pbmit-custom-heading, .pbmit-heading-subheading');
				if (!pbmit_var.length) {
					return;
				}
				const quotes = document.querySelectorAll(".pbmit-custom-heading .pbmit-title , .pbmit-heading-subheading .pbmit-title");
				quotes.forEach(quote => {
					var getclass = quote.closest('.pbmit-custom-heading ,.pbmit-heading-subheading').className;
					var animation = getclass.split('animation-');
					if (animation[1] == "style4") return
					//Reset if needed
					if (quote.animation) {
						quote.animation.progress(1).kill();
						quote.split.revert();
					}
					quote.split = new SplitText(quote, {
						type: "lines,words,chars",
						linesClass: "split-line"
					});
					gsap.set(quote, { perspective: 400 });
					if (animation[1] == "style1") {
						gsap.set(quote.split.chars, {
							opacity: 0,
							x: "50"
						});
					}
					if (animation[1] == "style2") {
						gsap.set(quote.split.chars, {
							opacity: 0,
							y: "90%",
							rotateX: "-40deg"
						});
					}
					if (animation[1] == "style3") {
						gsap.set(quote.split.chars, {
							opacity: 0,
						});
					}
					quote.animation = gsap.to(quote.split.chars, {
					scrollTrigger: {
						trigger: quote,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: .02
					});
				});
			},
		});
	}

	/* ====================================== */
	/* Sticky Header
	/* ====================================== */
	var pbmit_sticky_header = function() {
		if (jQuery('.pbmit-header-sticky-yes').length > 0) {
			var header_html = jQuery('#masthead .pbmit-main-header-area').html();
			jQuery('.pbmit-sticky-header').append(header_html);
			jQuery('.pbmit-sticky-header #menu-toggle').attr('id', 'menu-toggle2');
			jQuery('#menu-toggle2').on('click', function() {
				jQuery("#menu-toggle").trigger("click");
			});
			jQuery('.pbmit-sticky-header .main-navigation ul, .pbmit-sticky-header .main-navigation ul li, .pbmit-sticky-header .main-navigation ul li a').removeAttr('id');
			jQuery('.pbmit-sticky-header h1').each(function() {
				var thisele = jQuery(this);
				var thisele_class = jQuery(this).attr('class');
				thisele.replaceWith('<span class="' + thisele_class + '">' + jQuery(thisele).html() + '</span>');
			});
			// For infostak header
			if (jQuery('.pbmit-main-header-area').hasClass('pbmit-infostack-header')) { // check if infostack header
				// for header style 2
				jQuery(".pbmit-sticky-header .pbmit-header-menu-area").insertAfter(".pbmit-sticky-header .site-branding");
				jQuery('.pbmit-sticky-header .pbmit-header-info, .pbmit-sticky-header .pbmit-mobile-search, .pbmit-sticky-header .nav-menu-toggle').remove();
			}
		}
	}

	var pbmit_sticky_header_class = function() {
		// Add sticky class
		if (jQuery('#wpadminbar').length > 0) {
			jQuery('#masthead').addClass('pbmit-adminbar-exists');
		}
		var offset_px = 300;
		if (jQuery('.pbmit-main-header-area').length > 0) {
			offset_px = jQuery('.pbmit-main-header-area').height() + offset_px;
		}
		// apply on document ready
		if (jQuery(window).scrollTop() > offset_px) {
			jQuery('#masthead').addClass('pbmit-fixed-header');
			jQuery('.pbmit-sticky-header .mega-menu.max-mega-menu.mega-menu-horizontal').attr("id", "mega-menu-pbminfotech-top");
		} else {
			jQuery('#masthead').removeClass('pbmit-fixed-header');
		}
		jQuery(window).scroll(function() {
			if (jQuery(window).scrollTop() > offset_px) {
				jQuery('#masthead').addClass('pbmit-fixed-header');
				jQuery('.pbmit-sticky-header .mega-menu.max-mega-menu.mega-menu-horizontal').attr("id", "mega-menu-pbminfotech-top");
			} else {
				jQuery('#masthead').removeClass('pbmit-fixed-header');
			}
		});
	}

	var pbmit_menu_span = function() {
		jQuery('.pbmit-max-mega-menu-override #page #site-navigation .mega-menu-wrap>ul>li.mega-menu-item .mega-sub-menu a, .pbmit-navbar ul ul a').each(function(i, v) {
			jQuery(v).contents().eq(0).wrap('<span class="pbmit-span-wrapper"/>');
		});
	}

	var pbmit_toggleSidebar = function() {
		jQuery('#menu-toggle').on('click', function() {
			jQuery("body:not(.mega-menu-pbminfotech-top) .pbmit-navbar > div, body:not(.mega-menu-pbminfotech-top)").toggleClass("active");
		})
		if (jQuery('.pbmit-navbar > div > .closepanel').length == 0) {
			jQuery('.pbmit-navbar > div').append('<span class="closepanel"><svg class="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="20.163" height="20.163" viewBox="0 0 26.163 26.163"><rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect><rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect></svg></span>');
			jQuery('.pbmit-navbar > div > .closepanel, .mega-menu-pbminfotech-top .nav-menu-toggle').on('click', function() {
				jQuery(".pbmit-navbar > div, body, .mega-menu-wrap").toggleClass("active");
			});
			return false;
		}
	}

	var pbmit_navbar = function() {
		if (!jQuery('ul#pbmit-top-menu > li > a[href="#"]').pbmit_is_bound('click')) {
			jQuery('ul#pbmit-top-menu > li > a[href="#"]').on('click', function() { return false; });
		}
		jQuery('.pbmit-navbar > div > ul li:has(ul)').append("<span class='sub-menu-toggle'><i class='pbmit-base-icon-angle-right'></i></span>");
		jQuery('.pbmit-navbar li').on('mouseover', function() {
			if (jQuery(this).children("ul").length == 1) {
				var parent = jQuery(this);
				var child_menu = jQuery(this).children("ul");
				if (jQuery(parent).offset().left + jQuery(parent).width() + jQuery(child_menu).width() > jQuery(window).width()) {
					jQuery(child_menu).addClass('pbmit-nav-left');
				} else {
					jQuery(child_menu).removeClass('pbmit-nav-left');
				}
			}
		});
		jQuery(".nav-menu-toggle").on("click tap", function() {
		});
		jQuery('.sub-menu-toggle').on('click', function() {
			if (jQuery(this).siblings('.sub-menu, .children').hasClass('show')) {
				jQuery(this).siblings('.sub-menu, .children').removeClass('show');
				jQuery('i', jQuery(this)).removeClass('pbmit-base-icon-up-open-big').addClass('pbmit-base-icon-angle-right');
			} else {
				jQuery(this).siblings('.sub-menu, .children').addClass('show');
				jQuery('i', jQuery(this)).removeClass('pbmit-base-icon-angle-right').addClass('pbmit-base-icon-up-open-big');
			}
			return false;
		});
		jQuery('.nav-menu-toggle').on('click', function() {
			jQuery('.pbmit-navbar ul.menu > li > a').on('click', function() {
				if (jQuery(this).attr('href') == '#' && jQuery(this).siblings('ul.sub-menu, ul.children').length > 0) {
					jQuery(this).siblings('.sub-menu-toggle').trigger('click');
					return false;
				}
			});
		})
	}

	/* ====================================== */
	/* Pbmit Search Button
	/* ====================================== */
	var pbmit_search_btn = function() {
		jQuery(function() {
			jQuery('.pbmit-header-search-btn').on("click", function(event) {
				event.preventDefault();
				jQuery(".pbmit-header-search-form-wrapper").addClass("open");
				jQuery('.pbmit-header-search-form-wrapper input[type="search"]').focus();
			});
			jQuery(".pbmit-search-close").on("click keyup", function(event) {
				jQuery(".pbmit-header-search-form-wrapper").removeClass("open");
			});
		});
	}

	/* ====================================== */
	/* Thia Sticky
	/* ====================================== */
	var pbmit_thia_sticky = function() {
		if(typeof jQuery.fn.theiaStickySidebar == "function"){
			jQuery('.pbmit-sticky-sidebar').theiaStickySidebar({
				additionalMarginTop: 100
			});
			jQuery('.pbmit-sticky-column').theiaStickySidebar({
				additionalMarginTop: 180
			});
		}
	}

	/* ====================================== */
	/* Active Hover
	/* ====================================== */
	var pbmit_active_hover = function() {
		var pbmit_var = jQuery('.pbmit-element-portfolio-style-4, .pbmit-element-coaching-style-4');

		if (!pbmit_var.length) {
			return;
		}

		pbmit_var.each(function() {
			var pbmit_Class = '.pbmit-portfolio-style-4, .pbmit-coaching-style-4';
			jQuery(this)
				.find(pbmit_Class).first()
				.addClass('pbmit-active');
			jQuery(this)
				.find(pbmit_Class)
				.on('mouseover', function() {
					jQuery(this).addClass('pbmit-active').siblings().removeClass('pbmit-active');
				});
		});
	}

	/* ====================================== */
	/* Tabs
	/* ====================================== */
	var pbmit_tabs_element = function() {
		var tab_number = '';
		jQuery('.pbmit-tab-link').on('click ', function(){
			if( !jQuery(this).hasClass('pbmit-tab-li-active') ){
				var parent = jQuery(this).closest('ul.pbmit-tabs-heading');
				jQuery( 'li', parent).each(function(){
					jQuery(this).removeClass('pbmit-tab-li-active')
				});
				jQuery(this).addClass('pbmit-tab-li-active');
				tab_number = jQuery( this ).data('pbmit-tab');
				jQuery(this).parent().parent().find('.pbmit-tab-content').removeClass('pbmit-tab-active');
				jQuery(this).parent().parent().find('.pbmit-tab-content-'+tab_number).addClass('pbmit-tab-active');
			}
		});
		var this_title = '';
		jQuery('.pbmit-tab-content-title').on('click ', function(){
			this_title = jQuery(this);
			tab_number = jQuery( this ).data('pbmit-tab');
			jQuery( this ).closest('.pbmit-tab').find('li.pbmit-tab-link[data-pbmit-tab="'+tab_number+'"]',  ).trigger('click');
			var animateTo = jQuery(this_title).offset().top - 10;
			if (jQuery('#wpadminbar').length > 0) {
				animateTo = animateTo - jQuery('#wpadminbar').height();
			}
			jQuery('html, body').animate({
				scrollTop: animateTo
			}, 500);
		});

		let $container = jQuery('.pbmit_tabs_element'); // Define your container here, e.g., by ID
		if (!$container.length) return; // Exit if container not found

			let $tabs = $container.find('.pbmit-tab');
			let $titles = $tabs.find('.pbmit-tab-link');
			let $counter = $container.find('.pbmit-tab-counter');

			function updateCounter(index) {
				let current = (index + 1).toString().padStart(2, '');
				let total = $titles.length.toString().padStart(2, '');
				if ($counter.length) {
					$counter.text(`${current}/${total}`);
				}
			}

			let initialIndex = $titles.index($titles.filter('.pbmit-tab-li-active'));
			updateCounter(initialIndex >= 0 ? initialIndex : 0);

			var windowsize = jQuery(window).width();
			if (windowsize >991) {
				$tabs.find('.pbmit-tab-link').on('click ', function(){
				
					$tabs.find('.pbmit-tab-link').removeClass('pbmit-tab-li-active');
					jQuery(this).addClass('pbmit-tab-li-active');

					updateCounter($titles.index(this));
				});
			}
	};

	/* ====================================== */
	/* Animate Custom Text
	/* ====================================== */
	var pbmit_animate_custom_text = function() {
		if (typeof jQuery.fn.Morphext == "function") {
			jQuery("#js-rotating").Morphext({
				animation: "flipInX",
				speed: 3000,
			});
		}
	}

	/* ====================================== */
	/* Icon Box Hover Effect
	/* ====================================== */
	var pbmit_multi_icon_box_hover_effect = function() {
		jQuery(".pbmit-multi-icon-box-hover-effect .pbmit-element-miconheading-style-11	.pbmit-ele-miconheading:nth-child(1)").eq(0).addClass('pbmit-mihbox-hover-active');
		jQuery(".pbmit-multi-icon-box-hover-effect .pbmit-element-miconheading-style-11	.pbmit-ele-miconheading").mouseover(function() {
			var main_row = jQuery(this).closest('.pbmit-multi-icon-box-hover-effect .pbmit-element-miconheading-style-11');
			jQuery('.pbmit-element-miconheading-style-11 .pbmit-ele-miconheading', main_row).removeClass('pbmit-mihbox-hover-active');
			jQuery(this).addClass('pbmit-mihbox-hover-active');
		}).mouseout(function() {
			var main_row = jQuery(this).closest('.pbmit-multi-icon-box-hover-effect');
			jQuery('.pbmit-ele-miconheading', main_row).removeClass('pbmit-mihbox-hover-active');
			jQuery(this).addClass('pbmit-mihbox-hover-active');
		});
	}

	/* ====================================== */
	/* Pbmit Active Hover
	/* ====================================== */
	var pbmit_active_hover = function() {

		var pbmit_var = jQuery('.pbmit-element-portfolio-style-4, .pbmit-element-coaching-style-4');

		if (!pbmit_var.length) {
			return;
		}

		pbmit_var.each(function() {
			var pbmit_Class = '.pbmit-portfolio-style-4, .pbmit-coaching-style-4';
			jQuery(this)
				.find(pbmit_Class).first()
				.addClass('pbmit-active');
			jQuery(this)
				.find(pbmit_Class)
				.on('mouseover', function() {
					jQuery(this).addClass('pbmit-active').siblings().removeClass('pbmit-active');
				});
		});
	}

	/* ====================================== */
	/* Image Animation
	/* ====================================== */
	var pbmit_img_animation = function() {
		const pbmit_img_class = jQuery('.pbmit-animation-style1, .pbmit-animation-style2, .pbmit-animation-style3, .pbmit-animation-style4, .pbmit-animation-style5, .pbmit-animation-style6, .pbmit-animation-style7');
	
		pbmit_img_class.each(function() {
		  const each_box = jQuery(this);
	
		  new Waypoint({
			element: this, 
			handler: function(direction) {
			  if (direction === 'down') {
				each_box.addClass('active');
			  }
			},
			offset: '70%',
		  });
		});
	}

	ScrollTrigger.matchMedia({
		"(max-width: 1200px)": function() {
			ScrollTrigger.getAll().forEach(t => t.kill());
		}
	});

	// on ready
	jQuery(window).on('ready', function() {
		pbmit_title_animation();
	});

	// on load 
	jQuery(window).on('load', function(){
		pbmit_title_animation();
		pbmit_sticky_header();
		pbmit_sticky_header_class();
		pbmit_menu_span();
		pbmit_toggleSidebar();
		pbmit_navbar();
		pbmit_search_btn();
		pbmit_thia_sticky();
		pbmit_active_hover();
		pbmit_tabs_element();
		pbmit_animate_custom_text();
		pbmit_multi_icon_box_hover_effect();
		pbmit_active_hover();
		pbmit_img_animation();
	});	
})($);

