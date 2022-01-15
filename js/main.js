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
        $(this).css("opacity", 0.8);
    });
    $(".image-box img").mouseout(function(){
        $(this).css("opacity", 1);
    });
    
    //portfolio filtering function
    var $btns = $('.filter-btn').click(function() {
        if (this.id == 'all') {
            $('.portfolio-content > div').show("slow");
        } else {
            var $el = $('.' + this.id).show("slow");
            $('.portfolio-content > div').not($el).hide("slow");
        }
        $btns.removeClass('active');
        $(this).addClass('active');
    })
    
    //The Modal/Lightbox related code
    
    // Open the Modal
    function openModal() {
        document.getElementById("myModal").style.display = "block";
    }

    // Close the Modal
    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }
    
    $(".image-box").click(function(){
        var imgIdNumber = parseInt($(this).attr("id"), 10);
        openModal();
        currentSlide(imgIdNumber);
    });
    
    $(".close").click(function(){
        closeModal();
    });
    
    $(".next").click(function(){
        plusSlides(1);
    });
    
    $(".prev").click(function(){
        plusSlides(-1);
    });
    
    var slideIndex = 1;
    showSlides(slideIndex);
    
});
