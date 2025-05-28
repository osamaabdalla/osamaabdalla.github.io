(function($) {
    "use strict";

    //===== Preloader
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
        $('#preloader_two').fadeOut();
        $(".edubin_image_preloader").fadeOut("slow");
    });

    //===== Header Sticky & Headroom.js
    $(function() {
        var header = $(".header-get-sticky"),
            yOffset = 0,
            triggerPoint = 220;

        if (header.length) {
            $(window).on('scroll', function() {
                yOffset = $(window).scrollTop();
                if (yOffset >= triggerPoint) {
                    header.addClass("madartank");
                } else {
                    header.removeClass("madartank");
                }
            });

            var options = {
                offset: {
                    up: 160,
                    down: 1050
                },
                tolerance: {
                    up: 5,
                    down: 0
                }
            };
            var myElement = document.querySelector(".header-get-sticky");
            var headroom = new Headroom(myElement, options);
            headroom.init();
        }
    });

  //===== Login/Register Popup Modal
    $('.tpc-login-trigger-only').on('click', function(e) {
        e.preventDefault();
        $('.edubin-login-form-popup').toggleClass('login-popup-visible');
        $('.edubin-login-popup-overlay').toggleClass('active');
    });

    const login_btn = document.querySelector(".login-item");
    const register_btn = document.querySelector(".register-item");
    $(".register-form").css("display", "none");

    $(function() {
        $('.login-item, #edubin-login-form-trigger').on('click', function() {
            login_btn.classList.add("active");
            $(".register-form").css("display", "none");
            if (register_btn.classList.contains("active")) {
                register_btn.classList.remove("active");
                $(".login-form").removeAttr("style");
            }
        });

        $('.register-item, #edubin-register-form-trigger').on('click', function() {
            register_btn.classList.add("active");
            $(".login-form").css("display", "none");
            if (login_btn.classList.contains("active")) {
                login_btn.classList.remove("active");
                $(".register-form").removeAttr("style");
            }
        });
    });

    //===== Close Login/Register Modal on Click Outside
    $('.edubin-custom-login-wrapper').on('click', function() {
        console.log("clicked");
    });

    //===== Close Login Modal on Close Button Click
    $('.edubin-login-popup-close .close-trigger').on('click', function() {
        $('.edubin-login-form-popup').removeClass('login-popup-visible');
        $('.edubin-login-popup-overlay').removeClass('active');
    });

    //===== Course Filter Auto Select
    $('.edubin-course-filtering input').on('change', function() {
        $('.edubin-course-filtering').submit();
    });
    
    //===== Course Filter shorting 
     $(document).ready(function() {
        $('.course-orderby').on('change', function() {
          $('.course-top-filter').submit();
        });
      });

    //===== Mobile Menu
    $('.edubin-mobile-hamburger-menu').on('click', function() {
        $(".edubin-mobile-hamburger-menu > a").toggleClass('edubin-mobile-menu-close--active');
        $(".edubin-mobile-menu-nav-wrapper").toggleClass('edubin-mobile-menu-visible');
        $('body').toggleClass('edubin-mobile-menu-active');
    });

    $('.edubin-mobile-menu-close > a').on('click', function() {
        $('.edubin-mobile-hamburger-menu > a').removeClass('edubin-mobile-menu-close--active');
        $('.edubin-mobile-menu-nav-wrapper').removeClass('edubin-mobile-menu-visible');
        $('body').removeClass('edubin-mobile-menu-active');
    });

    $('.edubin-mobile-menu-overlay').on('click', function() {
        $('.edubin-mobile-hamburger-menu > a').removeClass('edubin-mobile-menu-close--active');
        $('.edubin-mobile-menu-nav-wrapper').removeClass('edubin-mobile-menu-visible');
        $('body').removeClass('edubin-mobile-menu-active');
    });

    //===== Accordion Menu for Mobile
    $.fn.extend({
        accordionMenu: function(options) {
            var defaults = {
                speed: 400
            }
            var options = $.extend(defaults, options);

            return this.each(function() {
                $(this).addClass('edubin-mobile-menu-item');
                var menuItems = $(this).children('li');
                menuItems.find('.edubin-mobile-menu-item > .edubin-dropdown-menu').parent().addClass('menu-item-has-children');
                $('.edubin-mobile-menu-item .menu-item-has-children .edubin-dropdown-menu').hide();
                $('.edubin-mobile-menu-item .menu-item-has-children > a .edubin-menu-icon').on('click', function(event) {
                    event.stopPropagation();
                    event.preventDefault();
                    $(this).parent().siblings('.edubin-dropdown-menu').slideToggle(options.speed);
                    $(this).parent().siblings('.edubin-mega-menu').slideToggle(options.speed);
                });
            });
        }
    });
    $('#edubin-mobile-menu-item').accordionMenu();

    
    //===== Elementor Mobile Menu
    $('.edubin-elementor-mobile-hamburger-menu').on('click', function() {
        $(".edubin-elementor-mobile-hamburger-menu > a").toggleClass('edubin-mobile-menu-close--active');
        $(".edubin-elementor-mobile-menu-nav-wrapper").toggleClass('edubin-mobile-menu-visible');
        $('body').toggleClass('edubin-mobile-menu-active');
    });

    $('.edubin-elementor-mobile-menu-close > a').on('click', function() {
        $('.edubin-elementor-mobile-hamburger-menu > a').removeClass('edubin-mobile-menu-close--active');
        $('.edubin-elementor-mobile-menu-nav-wrapper').removeClass('edubin-mobile-menu-visible');
        $('body').removeClass('edubin-mobile-menu-active');
    });

    $('.edubin-elementor-mobile-menu-overlay').on('click', function() {
        $('.edubin-elementor-mobile-hamburger-menu > a').removeClass('edubin-mobile-menu-close--active');
        $('.edubin-elementor-mobile-menu-nav-wrapper').removeClass('edubin-mobile-menu-visible');
        $('body').removeClass('edubin-mobile-menu-active');
    });

    //===== Accordion Menu for Elementor Mobile
    $.fn.extend({
        accordionMenu: function(options) {
            var defaults = {
                speed: 400
            }
            var options = $.extend(defaults, options);

            return this.each(function() {
                $(this).addClass('edubin-elementor-mobile-menu-item');
                var menuItems = $(this).children('li');
                menuItems.find('.edubin-elementor-mobile-menu-item > .edubin-dropdown-menu').parent().addClass('menu-item-has-children');
                $('.edubin-elementor-mobile-menu-item .menu-item-has-children .edubin-dropdown-menu').hide();
                $('.edubin-elementor-mobile-menu-item .menu-item-has-children > a .edubin-menu-icon').on('click', function(event) {
                    event.stopPropagation();
                    event.preventDefault();
                    $(this).parent().siblings().slideToggle(options.speed);
                    $(this).parent().siblings('.edubin-mega-menu').slideToggle(options.speed);
                });
            });
        }
    });
    $('#edubin-elementor-mobile-menu-item').accordionMenu();

    //===== WooCommerce Helper
    function edubin_woocommerce_helper() {
        $('.product-over-info ul li.add-to-cart a.add_to_cart_button.ajax_add_to_cart').on("click", function() {
            $(this).closest('li').addClass('added_to_cart_item');
        });
    }

    //===== Swiper Carousel
    const swiper = new Swiper('.tpc-swiper-carousel-activator', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            '@1.50': {
                slidesPerView: 4,
                spaceBetween: 1,
            },
        }
    });

    //===== SAL Animation
    sal();

    //===== Video Popup
    $(function() {
        $("a.bla-1").YouTubePopUp();
        $("a.bla-2").YouTubePopUp({ autoplay: 0 });
    });

    //===== Search
    $('#search').on('click', function() {
        $(".edubin-search-box").fadeIn(600);
    });
    
    $('.top-search').on('click', function() {
        $(".edubin-search-box").fadeIn(600);
    });

    $('.edubin-closebtn').on('click', function() {
        $(".edubin-search-box").fadeOut(600);
    });    


})(jQuery);
