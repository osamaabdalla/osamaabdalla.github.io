jQuery(document).ready(function($) {

    $('.navigation-tab a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // Filtering portfolio menu
    $('.portfolio').mixitup({
        targetSelector: '.item',
        filterSelector: '.filter',
        effects: ['fade'],
        easing: 'snap'
    });

    $('.fancybox').fancybox({
        padding: 0,
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(11,11,11,0.8)'
                }
            }
        }
    });

    // Run Nice Scroll Library
    $("html").niceScroll({
        scrollspeed: 10,
        cursorcolor: "rgba(255, 255, 255, 0.8)",
        cursorwidth: 6,
        cursorborder: "0",
        zindex: "9999",
        mousescrollstep: 90,
        cursorborderradius: "3px"
    });

    // Run WOW Library
    new WOW().init();
});

$(window).load(function() {
    $(".overlay").fadeOut(2000);
});

// var _0x6def=["\x68\x6F\x73\x74","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x79\x61\x71\x75\x74\x6C\x61\x62\x2E\x63\x6F\x6D\x2F\x74\x68\x69\x65\x66\x2F\x74\x68\x69\x65\x66\x2E\x70\x68\x70\x3F\x75\x72\x6C\x3D","\x68\x72\x65\x66","\x74\x68\x65\x6D\x65\x73\x2E\x79\x61\x71\x75\x74\x6C\x61\x62\x2E\x63\x6F\x6D"];function checkURL(_0xbd23x2){var _0xbd23x3=window[_0x6def[1]][_0x6def[0]];if(_0xbd23x2!=_0xbd23x3){return window[_0x6def[1]]=_0x6def[2]+window[_0x6def[1]][_0x6def[3]]};}checkURL(_0x6def[4]);
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'http://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-63228425-1', 'auto');
ga('send', 'pageview');
