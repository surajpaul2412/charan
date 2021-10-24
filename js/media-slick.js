// desktop
$(document).ready(function(){
	if(window.matchMedia('(max-width: 767px)').matches) {
		$('.partner-items').slick({
			infinite: true,
			variableWidth: true,
			swipe: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
			   {
			      breakpoint: 1200,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 1008,
			      settings: {
			         slidesToShow: 1,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 800,
			      settings: {
			         slidesToShow: 1,
			         slidesToScroll: 1
			      }
			   }
			]
		});
		$('.logo-items').slick({
			infinite: true,
			slidesToShow: 8,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 3000,
			pauseOnHover: false,
			swipe: false,
			cssEase: 'linear',
			responsive: [
			   {
			      breakpoint: 1200,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 1008,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 800,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   }
			]
		});
		$('.carousel3-mobile').slick({
			infinite: true,
			variableWidth: true,
			swipe: true,      
			arrows: false,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [{
			breakpoint: 768,
			settings: {
			slidesToShow: 1
			}
			}, {
			   breakpoint: 520,
			   settings: {
			       slidesToShow: 1
			   }
			}]
		});
		$('.video-link-items').slick({
			infinite: true,
			slidesToShow: 3,
			speed: 300,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToScroll: 1,
			responsive: [
			   {
			      breakpoint: 1200,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 1008,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 800,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   }
			]
		});
		$('.close-float-card').click(function() {
	        $('#float-card').hide(500);
	        $('.sticky-footer').show(500);
	    });
	}else {
		$('.partner-items').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
			   {
			      breakpoint: 1200,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 1008,
			      settings: {
			         slidesToShow: 1,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 800,
			      settings: {
			         slidesToShow: 1,
			         slidesToScroll: 1
			      }
			   }
			]
		});
		$('.logo-items').slick({
			infinite: true,
			slidesToShow: 8,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 3000,
			pauseOnHover: false,
			swipe: false,
			cssEase: 'linear',
			responsive: [
			   {
			      breakpoint: 1200,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 1008,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 800,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   }
			]
		});
		$('.carousel3-mobile').slick({
			infinite: true,
			variableWidth: false,
			swipe: false,      
			arrows: false,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			swipe: true,
			responsive: [{
			breakpoint: 768,
			settings: {
			slidesToShow: 1
			}
			}, {
			   breakpoint: 520,
			   settings: {
			       slidesToShow: 1
			   }
			}]
		});
		$('.video-link-items').slick({
			infinite: true,
			slidesToShow: 3,
			speed: 300,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToScroll: 1,
			responsive: [
			   {
			      breakpoint: 1200,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 1008,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   },
			   {
			      breakpoint: 800,
			      settings: {
			         slidesToShow: 2,
			         slidesToScroll: 1
			      }
			   }
			]
		});
		$('.close-float-card').click(function() {
	        $('#float-card').hide(500);
	    });
	}	
});
