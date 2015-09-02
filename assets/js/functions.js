
$(document).ready(function (){

    $('.button.info').on({
        click: function() {
            $('.sectionWrap').removeClass('textShowing');
            $(this).parent().parent().addClass('textShowing');
        }
    });

    $('.navitem, .home').on({
        mouseover: function() {
            $(this).siblings().removeClass('hover');
            $(this).addClass('hover');
        },
        mouseleave: function() {
            $(this).removeClass('hover')
        }
    });

    if ($(window).width() < 360){
        $('.home').html('back to <strong>hlr.com</strong>');
    }

    $('.burger').on({
        click: function() {
            if ($('.mobileNav').hasClass('isOpen')) {
                $('.mobileNav').removeClass('isOpen');
            }else{
                $('.mobileNav').addClass('isOpen');
            }
        }
    });

    if ($(window).width() < 720){
        $('.huge').html('hlr.com');
    }

});

$(document).mouseup(function (e) {
    var container = $(".button.info");
    var textbox = $('.section-text');

    if (!container.is(e.target)) {
        $('.sectionWrap').removeClass('textShowing');
    }
});
