$(document).ready(function(){

  
    $('#testimonial_slider').owlCarousel({
        items:3,
        loop:true,
        nav:false,
        dots:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed:2000,
    })
  
  
  // scrolling
        
  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
  

    $(function() {
        // (Optional) Active an item if it has the class "is-active"	
        $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
        
        $(".accordion > .accordion-item").click(function() {
            // Cancel the siblings
            $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
            // Toggle the item
            $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
        });
    });

    AOS.init();
  });

//   counter start
$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });
  //counter end

   // loader start
   $(document).ready(function(){
    setTimeout(function(){
        $('.loader').fadeOut();
    },3000);
})
//loader end

// scrolling start

$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});
// scrolling end