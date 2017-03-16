/**
 * Created by Administrator on 2017/3/15.
 */
$(document).ready(function() {
    document.oncontextmenu=function(){return false};
    // 轮播
    $("#owl-demo1").owlCarousel({
        items : 1,
        lazyLoad : false,
        autoPlay : true,
        autoplayTimeout:5000,
        navigation : false,
        navigationText :  false,
        pagination : true,
        autoplayHoverPause:true
    });

    // 图片放大
    $(".fancybox-thumb").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers	: {
            title	: {
                type: 'outside'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            }}
    });

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){

            window.location.hash = hash;
        });
    });

});