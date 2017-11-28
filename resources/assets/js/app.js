// *************************************************************************
// *************************************************************************
// *************************************************************************

require('./bootstrap');



// #ACCODION
// =========================================================================

$('.accordion__content').hide();
$('.accordion__content').first().show();
$('.accordion__panel').first().addClass('is--open');

$('.accordion__title').click(function() {
    $('.accordion__panel').removeClass('is--open');
    $(this).parent().addClass('is--open');
    $('.accordion__content').slideUp(200);
    $(this).next('.accordion__content').slideDown(200);
});



// #TABS
// =========================================================================

$('li[data-tab], .tabs__content').first().addClass('is--active');
$('.tabs__content').first().addClass('is--active');

$('li[data-tab]').click(function() {
    var thisTab = $(this).attr('data-tab');
    var tab = $('.tabs__content' + '[data-tab="' + thisTab + '"]');

    $('li[data-tab]').removeClass('is--active');
    $(this).addClass('is--active');
    $('.tabs__content').removeClass('is--active');
    tab.addClass('is--active');
});




// #DROPDOWN
// =========================================================================

$('.dropdown__container').mouseenter(function() {
    $(this).addClass('is--active');
});

$('.dropdown__container').mouseleave(function() {
    $(this).removeClass('is--active');
});

$('.dropdown').mouseleave(function() {
    $(this).parent().removeClass('is--active');
});




// #ALERT NOTIFY
// =========================================================================

$('.alert--notify').click(function() {
    $(this).fadeOut(200);
});



// #OFF CANVAS
// =========================================================================

var offCanvasTrigger = document.querySelector('.off-canvas__trigger');
var offCanvas = document.querySelector('.off-canvas');

if (offCanvasTrigger) {
    offCanvasTrigger.addEventListener('click', function () {
        offCanvas.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #MODAL
// =========================================================================

var modalTrigger = document.querySelector('.modal__trigger');
var modal = document.querySelector('.modal');

if (modalTrigger) {
    modalTrigger.addEventListener('click', function () {
        modal.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #KEY CONTROL
// =========================================================================

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        overlay.classList.remove('is--active');
    }
});

if (offCanvas) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            offCanvas.classList.remove('is--open');
        }
    });

}

if (modal) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            modal.classList.remove('is--open');
        }
    });

}



// #OVERLAY
// =========================================================================

var overlay = document.querySelector('.overlay');

if (overlay) {
    overlay.addEventListener('click', function () {
        this.classList.remove('is--active');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        offCanvas.classList.remove('is--open');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        modal.classList.remove('is--open');
    });
}



// #DOCS
// =========================================================================

/** LIGHTBOX **/
//photogallery
jQuery(document).ready(function($) {
    $('.lightbox').hide();
    $('.next').hide();
    $('.prev').hide();
    
    $('.process-thumbnails .modal__trigger').click(function(e){
        e.preventDefault();
        $('#app').addClass('lightbox-active');
        
        $('.lightbox').show();
        $('.next').show();
        $('.prev').show();
        $('.active').removeClass('active');
        $(this).addClass('active');
        
        var activeimg = $('.active').attr('src');      
        //lightbox content img src of active image
        $('.lightbox_content img').attr('src', activeimg);
        
    });
    
    var trigger = $('.process-thumbnails .modal__trigger');
    var active = $('.active');
    
    $('.next').click(function(){
        var next = $('.active').parent().next().children();
        $('.active').removeClass('active');
        next.addClass('active');
        
        var activeimg = $('.active').attr('src');
        $('.lightbox_content img').attr('src', activeimg);
    });
    
    $('.prev').click(function(){
        var previous = $('.active').parent().prev().children();
        $('.active').removeClass('active');
        previous.addClass('active');
        
        var activeimg = $('.active').attr('src');
        $('.lightbox_content img').attr('src', activeimg);     
    });
    
    $(document).mouseup(function(e) {     
        var arrows = $("span");     
        if (!arrows.is(e.target)) {
            $('.lightbox').hide();
        }
    });   
    
});

//previous work
jQuery(document).ready(function($) {
    $('.lightbox').hide();
    
    $('.image-container .modal__trigger').click(function(e){
        e.preventDefault();
        $('#app').addClass('lightbox-active');
        
        $('.lightbox').show();
        $('.next').hide();
        $('.prev').hide();
        $('.active').removeClass('active');
        $(this).parent().parent().children(':first-child').addClass('active');
        
        var activeimg = $('.active').attr('src');      
        //lightbox content img src of active image
        $('.lightbox_content img').attr('src', activeimg);
        
    });
    
    $(document).mouseup(function(e) {     
        var arrows = $("span");     
        if (!arrows.is(e.target)) {
            $('.lightbox').hide();
        }
    });   
    
});

//smooth scrolling
$(document).on('click', 'a', function(event){
    // event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 900);
});

//sticky nav
$(document).ready(function() {
    var stickyNavTop = $('.nav').offset().top;
     
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
              
        if (scrollTop > stickyNavTop) { 
            $('.nav').addClass('sticky');
            $('.off-canvas').addClass('sticky-nav');
        } else {
            $('.nav').removeClass('sticky'); 
            $('.off-canvas').removeClass('sticky-nav');
        }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
      stickyNav();
    });
});

//nav active class underline
$(document).ready(function() {
    $('.nav__navbar li').click(function(){
        $('ul.nav__navbar').removeClass('is--active');
        $('.nav__navbar li.is--active').removeClass('is--active');
        $(this).addClass('is--active');
    });
});

    var form = $('form');
    $(form).submit(function(e) {
        e.preventDefault();
        var formData = new FormData();

        $.ajax({
            type: "post",
            url: "/",
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function(returndata){
                $('<div class="alert success">Your message has been sent! We\'ll be in touch.</div>').insertAfter(form);

                $('input').val(' ');
                $('textarea').val(' ');
            },
            error: function(returndata){
                $('<div class="alert failure">Uh oh! Something went wrong! Please try again.</div>').insertAfter(form);

                $('input').val(' ');
                $('textarea').val(' ');
            } 
        });

        return false;
    });