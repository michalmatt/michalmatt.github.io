$(function(){
    console.log("jquery works");
    
    //Hide menu & cross
    $('.cross').hide();
    $('.menu').hide();
    
    //Humberger click function
    $('.hamburger').click(function() {
        $('.menu').slideToggle('slow', function() {
            $('.hamburger').hide();
            $('.cross').show();
        });
    });
    
    //Menu item click function
    $('.menu li').click(function() {
        $('.menu').slideToggle('slow', function() {
            $('.cross').hide();
            $('.hamburger').show();
        });
    });
    
    //Cross click function
    $('.cross').click(function() {
        $('.menu').slideToggle('slow', function() {
            $('.cross').hide();
            $('.hamburger').show();
        });
    });
    
    //Banner slide show function
    function slideshow() {
        let i;
        let slides = document.getElementsByClassName("bannerSlideShow");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        counter++;
        if (counter > slides.length) {
            counter = 1;
        }
        slides[counter-1].style.display = "block";
        setTimeout(slideshow, 3000);
    }
    
    //Banner slide show
    var counter = 0;
    slideshow();
    
    //CSS opacity change on hover
    $(".image-box img").mouseover(function(){
        $(this).css("opacity", 0.6);
    });
    $(".image-box img").mouseout(function(){
        $(this).css("opacity", 1);
    });
    
    //portfolio filtering function
    var $btns = $('.filter-btn').click(function() {
        if (this.id == 'all') {
            $('.portfolio-content > div').show();
        } else {
            var $el = $('.' + this.id).show();
            $('.portfolio-content > div').not($el).hide();
        }
        $btns.removeClass('active');
        $(this).addClass('active');
    })
    
});
