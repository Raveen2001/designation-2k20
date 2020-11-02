
	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        750:{
	            items:3
	        },
	        1000:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    }
	})

	iziToast.settings({
		timeout: 3000,
		resetOnHover: true,
		transitionIn: 'flipInX',
		transitionOut: 'flipOutX',
		onOpen: function () {
		  console.log('opened');
		},
		onClose: function () {
		  console.log("closed");
		}
	  });

	$(function(){
  
		$("#python").iziModal({
		 radius: 5,
		 padding: 20,
		  closeButton: true,
		  title: 'Python App Development',
		  headerColor: '#116466'
	   });
	   })


	   $(function(){
  
		$("#iot").iziModal({
		 radius: 5,
		 padding: 20,
		  closeButton: true,
		  title: 'Internet Of Things Development',
		  headerColor: '#116466'
	   });
	   })


	   $(function(){
  
		$("#android").iziModal({
		 radius: 5,
		 padding: 20,
		  closeButton: true,
		  title: 'Android App Development',
		  headerColor: '#116466'
	   });
	   })


	   $(function(){
  
		$("#ios").iziModal({
		 radius: 5,
		 padding: 20,
		  closeButton: true,
		  title: 'IOS App Development',
		  headerColor: '#116466'
	   });
	   })


	   $(function(){
  
		$("#wearable").iziModal({
		 radius: 5,
		 padding: 20,
		  closeButton: true,
		  title: 'Wearable App Development',
		  headerColor: '#116466'
	   });
	   })


	   $(function(){
  
		$("#web").iziModal({
		 radius: 5,
		 padding: 20,
		  closeButton: true,
		  title: 'Web App Development',
		  headerColor: '#116466'
	   });
	   })


	   $(function(){
  
		$("#node").iziModal({
		 radius: 5,
		 padding: 20,
		  closeButton: true,
		  title: 'Back-end App Development',
		  headerColor: '#116466'
	   });
	   })


	   $(function(){
  
		$("#more").iziModal({
		 radius: 5,
		 padding: 20,
		  closeButton: true,
		  title: 'AL, ML, NLP, Data Science and more',
		  headerColor: '#116466'
	   });
	   })

	


	


