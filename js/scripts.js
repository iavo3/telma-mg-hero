(function($){
	$(document).ready(function() {

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});

		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		jQuery(".dodtoptlotn-righta1 h4 i").click(function() {
			jQuery(".maindodtoptlotn-righta").show();
		});

		jQuery(".dodtoptlotn-righta1 h4 i").click(function() {
			jQuery(".dodtoptlotn-righta1 h4 i").css("color", "#3e3e3e");
		});

		jQuery(".dodtoptlotn-rightb2 i").click(function() {
			jQuery(".maindodtoptlotn-righta").hide();
		});

		jQuery(".dodtoptlotn-rightb2 i").click(function() {
			jQuery(".dodtoptlotn-righta1 h4 i").css("color", "#fff");
		});

		jQuery(".dodtoptlotn-righta1 h4 i").click(function(){
			jQuery(".dodtoptlotn-righta").addClass("dodtoptlotn-righaaaata");
		});

		jQuery(".dodtoptlotn-rightb2 i").click(function(){
			jQuery(".dodtoptlotn-righta").addClass("dodtoptlotn-righaaaataa");
		});


		//Afficher plus d'informations1

		jQuery(".up1").click(function() {
			jQuery(".up1").hide();
		});

		jQuery(".up1").click(function() {
			jQuery(".down1").show();
		});


		jQuery(".down1").click(function() {
			jQuery(".down1").hide();
		});

		jQuery(".down1").click(function() {
			jQuery(".up1").show();
		});


		jQuery(".up1").click(function(){
			jQuery(".tttsosct-sosct-part1").css({"position": "absolute", "width": "100%", "bottom": "0"});
		});

		jQuery(".down1").click(function(){
			jQuery(".tttsosct-sosct-part1").css('position', 'initial');
		});



		//Afficher plus d'informations1

		jQuery(".up2").click(function() {
			jQuery(".up2").hide();
		});

		jQuery(".up2").click(function() {
			jQuery(".down2").show();
		});


		jQuery(".down2").click(function() {
			jQuery(".down2").hide();
		});

		jQuery(".down2").click(function() {
			jQuery(".up2").show();
		});


		jQuery(".up2").click(function(){
			jQuery(".tttsosct-sosct-part2").css({"position": "absolute", "width": "100%", "bottom": "0"});
		});

		jQuery(".down2").click(function(){
			jQuery(".tttsosct-sosct-part2").css('position', 'initial');
		});



		//Afficher plus d'informations1
		jQuery(".up3").click(function() {
			jQuery(".up3").hide();
		});

		jQuery(".up3").click(function() {
			jQuery(".down3").show();
		});


		jQuery(".down3").click(function() {
			jQuery(".down3").hide();
		});

		jQuery(".down3").click(function() {
			jQuery(".up3").show();
		});


		jQuery(".up3").click(function(){
			jQuery(".tttsosct-sosct-part3").css({"position": "absolute", "width": "100%", "bottom": "0"});
		});

		jQuery(".down3").click(function(){
			jQuery(".tttsosct-sosct-part3").css('position', 'initial');
		});


		jQuery(".ssosct-part2").click(function(){
			jQuery(".tttsosct-sosct-part2").addClass("tttsosct-part2");
		});


		jQuery(".ssosct-part3").click(function(){
			jQuery(".tttsosct-sosct-part3").addClass("tttsosct-part3");
		});


		//slider1
		jQuery(document).ready(function() {
			$(".slider1").owlCarousel({
				"items" : 3,
				"margin" : 0,
				"autoplay": false,
				"autoplayTimeout" : 2000,
				"loop" : true,
				"nav" : false,
				"dop" : true,
				"responsive" : {
					0 : {
						"items" : 1
					},
					576 : {
						"items" : 1
					},
					767 : {
						"items" : 1
					},
					991 : {
						"items" : 1
					}


				}
			});

			var owl = $('.slider1');
			owl.owlCarousel();
			// Go to the next item
			$('.customNextBtn_a1').click(function() {
				owl.trigger('next.owl.carousel');
			})
			// Go to the previous item
			$('.customPrevBtn_a1').click(function() {
				// With optional speed parameter
				// Parameters has to be in square bracket '[]'
				owl.trigger('prev.owl.carousel', [300]);
			})

		});





		//slider2
		jQuery(document).ready(function() {
			$(".slider2").owlCarousel({
				"items" : 4,
				"margin" : 0,
				"autoplay": false,
				"autoplayTimeout" : 2000,
				"loop" : true,
				"nav" : false,
				"dop" : true,
				"responsive" : {
					0 : {
						"items" : 1
					},
					576 : {
						"items" : 1
					},
					767 : {
						"items" : 1
					},
					991 : {
						"items" : 1
					}


				}
			});

			var owl = $('.slider2');
			owl.owlCarousel();
			// Go to the next item
			$('.customNextBtn_a2').click(function() {
				owl.trigger('next.owl.carousel');
			})
			// Go to the previous item
			$('.customPrevBtn_a2').click(function() {
				// With optional speed parameter
				// Parameters has to be in square bracket '[]'
				owl.trigger('prev.owl.carousel', [300]);
			})

		});

		//slider3
		jQuery(document).ready(function() {
			$(".slider3").owlCarousel({
				"items" : 4,
				"margin" : 0,
				"autoplay": true,
				"autoplayTimeout" : 2000,
				"loop" : true,
				"nav" : false,
				"dop" : true,
				"responsive" : {
					0 : {
						"items" : 2
					},
					576 : {
						"items" : 2
					},
					767 : {
						"items" : 2
					},
					991 : {
						"items" : 4
					}


				}
			});

			var owl = $('.slider3');
			owl.owlCarousel();
			// Go to the next item
			$('.customNextBtn_a2').click(function() {
				owl.trigger('next.owl.carousel');
			})
			// Go to the previous item
			$('.customPrevBtn_a2').click(function() {
				// With optional speed parameter
				// Parameters has to be in square bracket '[]'
				owl.trigger('prev.owl.carousel', [300]);
			})

		});

		//slider4
		jQuery(document).ready(function() {
			$(".slider4").owlCarousel({
				"items" : 4,
				"margin" : 0,
				"autoplay": true,
				"autoplayTimeout" : 4000,
				"loop" : true,
				"nav" : false,
				"dop" : true,
				"responsive" : {
					0 : {
						"items" : 2
					},
					576 : {
						"items" : 2
					},
					767 : {
						"items" : 2
					},
					991 : {
						"items" : 4
					}


				}
			});

			var owl = $('.slider4');
			owl.owlCarousel();
			// Go to the next item
			$('.customNextBtn_a2').click(function() {
				owl.trigger('next.owl.carousel');
			})
			// Go to the previous item
			$('.customPrevBtn_a2').click(function() {
				// With optional speed parameter
				// Parameters has to be in square bracket '[]'
				owl.trigger('prev.owl.carousel', [300]);
			})

		});




		//slider5
		jQuery(document).ready(function() {
			$(".slider5").owlCarousel({
				"items" : 4,
				"margin" : 0,
				"autoplay": true,
				"autoplayTimeout" : 3000,
				"loop" : true,
				"nav" : false,
				"dop" : true,
				"responsive" : {
					0 : {
						"items" : 1
					},
					576 : {
						"items" : 1
					},
					767 : {
						"items" : 2
					},
					991 : {
						"items" : 3
					}


				}
			});

			var owl = $('.slider5');
			owl.owlCarousel();
			// Go to the next item
			$('.customNextBtn_a2').click(function() {
				owl.trigger('next.owl.carousel');
			})
			// Go to the previous item
			$('.customPrevBtn_a2').click(function() {
				// With optional speed parameter
				// Parameters has to be in square bracket '[]'
				owl.trigger('prev.owl.carousel', [300]);
			})

		});


		//slider6
		jQuery(document).ready(function() {
			$(".slider6").owlCarousel({
				"items" : 9,
				"margin" : 0,
				"autoplay": false,
				"autoplayTimeout" : 3000,
				"loop" : true,
				"nav" : false,
				"dop" : true,
				"responsive" : {
					0 : {
						"items" : 1
					},
					576 : {
						"items" : 1
					},
					767 : {
						"items" : 2
					},
					991 : {
						"items" : 3
					}


				}
			});

			var owl = $('.slider6');
			owl.owlCarousel();
			// Go to the next item
			$('.customNextBtn_a6').click(function() {
				owl.trigger('next.owl.carousel');
			})
			// Go to the previous item
			$('.customPrevBtn_a6').click(function() {
				// With optional speed parameter
				// Parameters has to be in square bracket '[]'
				owl.trigger('prev.owl.carousel', [300]);
			})

		});

		//slider7
		jQuery(document).ready(function() {
			$(".slider7").owlCarousel({
				"items" : 9,
				"margin" : 0,
				"autoplay": true,
				"autoplayTimeout" : 5000,
				"loop" : true,
				"nav" : false,
				"dop" : true,
				"responsive" : {
					0 : {
						"items" : 2
					},
					576 : {
						"items" : 2
					},
					767 : {
						"items" : 2
					},
					991 : {
						"items" : 3
					}


				}
			});

			var owl = $('.slider7');
			owl.owlCarousel();
			// Go to the next item
			$('.customNextBtn_a6').click(function() {
				owl.trigger('next.owl.carousel');
			})
			// Go to the previous item
			$('.customPrevBtn_a6').click(function() {
				// With optional speed parameter
				// Parameters has to be in square bracket '[]'
				owl.trigger('prev.owl.carousel', [300]);
			})

		});

		if (window.matchMedia('(max-width: 767.98px)').matches){
			$('.tab_top ul').addClass('owl-carousel');
			$(".tab_top ul.owl-carousel").owlCarousel({
				margin: 30,
				autoWidth: true,
				nav: true,
				dots: false
			});
			$('.tab_top ul li a').on('click', function(e){
				e.preventDefault();
				var tab_id = $(this).attr('href');
				$('.tab_top ul li a').removeClass('active');
				$(this).addClass('active');

				$('.tab-pane').removeClass('show active');
				$(tab_id).addClass('show active');
			});
		}

		$('.side_toggle').on('click', function(){
			$('.sidebar').toggleClass('current');
		})

		$('.hero-2-slider-active').owlCarousel({
			loop:true,
			margin:0,
			responsiveClass:true,
			nav:false,
			dots:true,
			navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
			responsive:{
				0:{
					items:1,
					nav:false
				},
				600:{
					items:1,
					nav:false
				},
				1000:{
					items:1,
					nav:false,
					loop:false
				}
			}
		});
	});
})(jQuery);
