(function($) {
    "use strict";

    // ==== Testimonial ====
    var WidgetTestimonialCarouselHandler = function($scope, $) {
        var $carouselElem = $scope.find('.tpc-testimonial_wrapper').eq(0);
        var settings = $carouselElem.data('settings');
        var autoPlay = settings['autoplay'];
        var autoplaySpeed = parseInt(settings['autoplay_speed']) || 3000;
        var infiniteLoop = settings['infinite_loop'];
        var centerSlides = settings['center_slides'];
        var displayColumns = settings['display_columns'] || 2;
        var itemGap = parseInt(settings['item_gap']) || 20;
        var pauseOnHover = settings['pause_on_hover'];
        var pauseOnInteraction = settings['pause_on_interaction'];

        var displayColumnsTablet = settings['display_columns_tablet'] || 2;
        var tabletItemGap = parseInt(settings['tablet_item_gap']) || 20;
        var centerSlidesTab = settings['center_slides_tablet'];

        var displayColumnsMobile = settings['display_columns_mobile'] || 1;
        var mobileItemGap = parseInt(settings['mobile_item_gap']) || 0;
        var centerSlidesMobile = settings['center_slides_mobile'];

        var autoplayOptions = autoPlay ? {
            delay: autoplaySpeed,
            pauseOnMouseEnter: pauseOnHover,
            disableOnInteraction: pauseOnInteraction,
        } : false;

        var swiperParams = {
            spaceBetween: itemGap,
            slidesPerView: displayColumns,
            loop: infiniteLoop,
            centeredSlides: centerSlides,
            pagination: {
                el: $carouselElem.find('.testi-pagination')[0], // Using [0] to get the DOM element
                clickable: true,
            },
            navigation: {
                nextEl: $carouselElem.find('.testi-button-next')[0],
                prevEl: $carouselElem.find('.testi-button-prev')[0],
            },
            autoplay: autoplayOptions,
            breakpoints: {
                0: {
                    slidesPerView: displayColumnsMobile,
                    spaceBetween: mobileItemGap,
                    centeredSlides: centerSlidesMobile,
                },
                575: {
                    slidesPerView: displayColumnsTablet,
                    spaceBetween: tabletItemGap,
                    centeredSlides: centerSlidesTab,
                },
                992: {
                    slidesPerView: displayColumns,
                    centeredSlides: centerSlides,
                },
            }
        };

        // Generate a unique selector for the Swiper container
        var $swiperContainer = $carouselElem.find('.tpc_testimonial');
        var uniqueId = 'swiper-container-' + Math.random().toString(36).substr(2, 9);
        $swiperContainer.addClass(uniqueId);

        new Swiper('.' + uniqueId, swiperParams);
    };


    var WidgetCategoryCarouselHandler = function($scope, $) {
        var $catCarouselElem = $scope.find('.tpc-category-carousel-wrapper').eq(0);
        var settings = $catCarouselElem.data('settings');
        var autoPlay = settings['autoplay'];
        var autoplaySpeed = parseInt(settings['autoplay_speed']) || 3000;
        var infiniteLoop = settings['infinite_loop'];
        var centerSlides = settings['center_slides'];
        var displayColumns = settings['display_columns'] || 3;
        var itemGap = parseInt(settings['item_gap']) || 20;
        var pauseOnHover = settings['pause_on_hover'];
        var pauseOnInteraction = settings['pause_on_interaction'];
    
        var displayColumnsTablet = settings['display_columns_tablet'] || 2;
        var tabletItemGap = parseInt(settings['tablet_item_gap']) || 20;
        var centerSlidesTab = settings['center_slides_tablet'];
    
        var displayColumnsMobile = settings['display_columns_mobile'] || 1;
        var mobileItemGap = parseInt(settings['mobile_item_gap']) || 0;
        var centerSlidesMobile = settings['center_slides_mobile'];
    
        var autoplayOptions = autoPlay ? {
            delay: autoplaySpeed,
            pauseOnMouseEnter: pauseOnHover,
            disableOnInteraction: pauseOnInteraction,
        } : false;
    
        var swiperParams = {
            spaceBetween: itemGap,
            slidesPerView: displayColumns,
            loop: infiniteLoop,
            centeredSlides: centerSlides,
            pagination: {
                el: $catCarouselElem.find('.category-pagination')[0], // Using [0] to get the DOM element
                clickable: true,
            },
            navigation: {
                nextEl: $catCarouselElem.find('.cat-next')[0],
                prevEl: $catCarouselElem.find('.cat-prev')[0],
            },
            autoplay: autoplayOptions,
            breakpoints: {
                0: {
                    slidesPerView: displayColumnsMobile,
                    spaceBetween: mobileItemGap,
                    centeredSlides: centerSlidesMobile,
                },
                575: {
                    slidesPerView: displayColumnsTablet,
                    spaceBetween: tabletItemGap,
                    centeredSlides: centerSlidesTab,
                },
                992: {
                    slidesPerView: displayColumns,
                    centeredSlides: centerSlides,
                },
            }
        };
    
        // Generate a unique selector for the Swiper container
        var $swiperContainer = $catCarouselElem.find('.tpc-cat-carousel');
        var uniqueId = 'swiper-container-' + Math.random().toString(36).substr(2, 9);
        $swiperContainer.addClass(uniqueId);
    
        new Swiper('.' + uniqueId, swiperParams);
    };

 // ==== Accordion ====

    // var WidgetAccordionsMapHandler = function($scope, $) {
    //     // Getting Accordion id
    //     var accordion_element = $scope.find('.accordion').eq(0);
    //     var settings = accordion_element.data('settings');
    //     var elem_id = settings['accordion_id'];
    
    //     // Define scoped selectors
    //     var header_class = ".edubin-accordion-header" + elem_id;
    //     var icon_class = ".edubin-icon" + elem_id;
    //     var header_active_class = ".edubin-accordion-header" + elem_id + ".active";
    
    //     // Scoped selection of elements within the current accordion
    //     const questions = $scope.find(header_class);
    
    //     questions.each(function(index, element) {
    //         $(element).on("click", function() {
    //             var nextBox = $(this).next();
    //             var currentBox = $(this);
    //             var icons = $(this).find(icon_class);
    
    //             icons.css("transition", "0.3s linear");
    
    //             if (nextBox.hasClass("active")) {
    //                 nextBox.removeClass("active");
    //                 currentBox.removeClass("active");
    //                 icons.css("transform", "rotate(0deg)");
    //             } else {
    //                 // Close all active elements within this accordion
    //                 $scope.find(header_active_class).removeClass("active");
    //                 $scope.find(".accordion-body.active").removeClass("active");
    //                 $scope.find(icon_class).css("transform", "rotate(0deg)");
    
    //                 icons.css("transform", "rotate(180deg)");
    //                 nextBox.addClass("active");
    //                 currentBox.addClass("active");
    //             }
    //         });
    //     });
    // };

        // ==== Accordion ====

        var WidgetAccordionsMapHandler = function($scope, $) {
            // Getting Accordion id
            var accordion_element = $scope.find('.accordion').eq(0);
            var settings = accordion_element.data('settings');
            var close_all = accordion_element.data('close-all');
            var open_item = accordion_element.data('open-item');
            var elem_id = settings['accordion_id'];
     
            // Define scoped selectors
            var header_class = ".edubin-accordion-header" + elem_id;
            var content_class = ".accordion-body" + elem_id;
            var icon_class = ".edubin-icon" + elem_id;
            var speed = 400;
        
            // Scoped selection of elements within the current accordion
            const questions = $scope.find(header_class);
            const acc_content = $scope.find(content_class);
        
    
            if(close_all === true){
                // Initially close all accordion bodies and remove 'active' class from headers
                acc_content.hide();  // Hide all accordion bodies
                questions.removeClass('active'); // Remove 'active' class from all headers
            }else{
                // Initially close all accordion bodies except the n one
                acc_content.hide().eq(open_item).show();  // Hide all, then show the n
                questions.removeClass('active').eq(open_item).addClass('active'); // Remove 'active' class from all, then add it to the n
            }
     
        
            questions.each(function(index, element) {
                $(element).on("click", function() {
                    var $this = $(this);
                    var nextBox = $this.next();
        
                    // Toggle the clicked accordion
                    $this.toggleClass('active');
                    nextBox.slideToggle(speed);
        
                    // Close all other accordion bodies and remove 'active' class from other headers
                    acc_content.not(nextBox).slideUp(speed);
                    questions.not($this).removeClass('active');
                });
            });
        };

 var WidgetCourseFilter = function($scope, $) {
       
       //===== Grid view/List view
        const grid_btn = document.querySelector(".tpc-grid-filter-trigger");
        const list_btn = document.querySelector(".tpc-list-filter-trigger");
        const grid_elem = document.querySelector(".display-layout-grid");
        const list_elem = document.querySelector(".display-layout-list");
        const grid_txt = document.querySelector(".tpc-grid-filter-text");
        const list_txt = document.querySelector(".tpc-list-filter-text");

        $(function() {
            $('.tpc-grid-filter-trigger').click(function() {
                grid_btn.classList.add("active");
                grid_elem.classList.add("active");
                grid_txt.classList.add("active");
                if (list_btn.classList.contains("active")) {
                    list_btn.classList.remove("active");
                    list_elem.classList.remove("active");
                    list_txt.classList.remove("active");
                }
            });
            $('.tpc-list-filter-trigger').click(function() {
                list_btn.classList.add("active");
                list_elem.classList.add("active");
                list_txt.classList.add("active");
                if (grid_btn.classList.contains("active")) {
                    grid_btn.classList.remove("active");
                    grid_elem.classList.remove("active");
                    grid_txt.classList.remove("active");
                }
            });

            $('.widget-course_category > .widget-title').click(function() {
                $(".widget-course_category").toggleClass('collapsed');
                $( ".widget-course_category > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            // For Tutor
            $('.widget-course-category > .widget-title').click(function() {
                $(".widget-course-category").toggleClass('collapsed');
                $( ".widget-course-category > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
    
            $('.widget-ld_course_category > .widget-title').click(function() {
                $(".widget-ld_course_category").toggleClass('collapsed');
                $( ".widget-ld_course_category > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
    
            $('.widget-course_tag > .widget-title').click(function() {
                $(".widget-course_tag").toggleClass('collapsed');
                $( ".widget-course_tag > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            // For Tutor
            $('.widget-course-tag > .widget-title').click(function() {
                $(".widget-course-tag").toggleClass('collapsed');
                $( ".widget-course-tag > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            // For LearnDash
            $('.widget-ld_course_tag > .widget-title').click(function() {
                $(".widget-ld_course_tag").toggleClass('collapsed');
                $( ".widget-ld_course_tag > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            // For LearnDash
            $('.widget-ld_course_language > .widget-title').click(function() {
                $(".widget-ld_course_language").toggleClass('collapsed');
                $( ".widget-ld_course_language > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            // For LearnPress
            $('.widget-lp_course_language > .widget-title').click(function() {
                $(".widget-lp_course_language").toggleClass('collapsed');
                $( ".widget-lp_course_language > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            // For Tutor
            $('.widget-tutor_course_language > .widget-title').click(function() {
                $(".widget-tutor_course_language").toggleClass('collapsed');
                $( ".widget-tutor_course_language > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });

            $('.widget-tl_price > .widget-title').click(function() {
                $(".widget-tl_price").toggleClass('collapsed');
                $( ".widget-tl_price > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });

            $('.widget-tl_level > .widget-title').click(function() {
                $(".widget-tl_level").toggleClass('collapsed');
                $( ".widget-tl_level > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });

            // For Sensei
            $('.widget-sensei_course_language > .widget-title').click(function() {
                $(".widget-sensei_course_language").toggleClass('collapsed');
                $( ".widget-sensei_course_language > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
    
            $('.widget-instructor > .widget-title').click(function() {
                $(".widget-instructor").toggleClass('collapsed');
                $( ".widget-instructor > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
    
            $('.widget-lp_level > .widget-title').click(function() {
                $(".widget-lp_level").toggleClass('collapsed');
                $( ".widget-lp_level > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            $('.widget-lp_price > .widget-title').click(function() {
                $(".widget-lp_price").toggleClass('collapsed');
                $( ".widget-lp_price > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            // For MasterStudy
            $('.widget-stm_lms_course_taxonomy > .widget-title').click(function() {
                $(".widget-stm_lms_course_taxonomy").toggleClass('collapsed');
                $( ".widget-stm_lms_course_taxonomy > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            $('.widget-ms_course_language > .widget-title').click(function() {
                $(".widget-ms_course_language").toggleClass('collapsed');
                $( ".widget-ms_course_language > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            $('.widget-ms_status > .widget-title').click(function() {
                $(".widget-ms_status").toggleClass('collapsed');
                $( ".widget-ms_status > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            $('.widget-ms_level > .widget-title').click(function() {
                $(".widget-ms_level").toggleClass('collapsed');
                $( ".widget-ms_level > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            $('.widget-ms_price > .widget-title').click(function() {
                $(".widget-ms_price").toggleClass('collapsed');
                $( ".widget-ms_price > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            // For Lifter
            $('.widget-course_cat > .widget-title').click(function() {
                $(".widget-course_cat").toggleClass('collapsed');
                $( ".widget-course_cat > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            $('.widget-course_difficulty > .widget-title').click(function() {
                $(".widget-course_difficulty").toggleClass('collapsed');
                $( ".widget-course_difficulty > .tpc-filter-content" ).toggle({duration:200, easing:"linear"});
            });
            // Mobile Filter Sidebar
            $('.tpc-course-filter-toggle').click(function() {
                $(".tpc-course-filter-toggle").toggleClass('tpc-filter-activation-key');
                $(".course-filter-form-wrapper").toggleClass('tpc-filter-sidebar-active');
                $('body').toggleClass('tpc-body-filter-sidebar-active');
            });
            $('.edubin-filter-close-trigger').click(function() {
                $('.tpc-course-filter-toggle').removeClass('tpc-filter-activation-key');
                $('.course-filter-form-wrapper').removeClass('tpc-filter-sidebar-active');
                $('body').removeClass('tpc-body-filter-sidebar-active');
            });

            $('.edubin-filter-active-overlay').click(function() {
                $('.tpc-course-filter-toggle').removeClass('tpc-filter-activation-key');
                $('.course-filter-form-wrapper').removeClass('tpc-filter-sidebar-active');
                $('body').removeClass('tpc-body-filter-sidebar-active');
            });
        });

    }

     //===== Course Isotope ====
    var WidgetCourseIsotope = function($scope, $) {

    var $grid = $('.edubin-course-filter-type-cat-filter').isotope({
        itemSelector: '.edubin-course-1-grid-item',
        layoutMode: 'fitRows',
        });
        
        // filter functions
        var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
        };
        
        // bind filter button click
        $('.edubin-filter-course').on( 'click', 'span', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
        });
      
    // change is-checked class on buttons
    $('.edubin-filter-course').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', '.filter-item', function() {
        $buttonGroup.find('.current').removeClass('current');
        $( this ).addClass('current');
        });
    });

    }

    //===== Counter =====
    var WidgetCounterHandler = function($scope, $) {
        var count_elem = $scope.find('.eb_counting').eq(0);
        count_elem.counterUp({
            delay: 10,
            time: 1000,
        });
    }

    // ====== Countdown =====
    var WidgetCountdown = function($scope, $) {
       
        var accordion_element = $scope.find('.edubin-countdown-timer-widget').eq(0);
        var settings = accordion_element.data('settings');
        var elem_id = settings['countdown_id'];
        
        //date id with id prefix for multiple elementor element in same page
        var days_id = "days"+elem_id;
        var hours_id = "hours"+elem_id;
        var minutes_id = "minutes"+elem_id;
        var seconds_id = "seconds"+elem_id;
        var countdown_id = "countdown"+elem_id;
        var label_id = "ctw-label"+elem_id;

        var date = settings['countdown_date'];

        const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            var d = date;
            d = d.split(' ')[0];
        const countDown = new Date(d).getTime(),
            x = setInterval(function() {    


                const now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById(days_id).innerText = Math.floor(distance / (day)),
                document.getElementById(hours_id).innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById(minutes_id).innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById(seconds_id).innerText = Math.floor((distance % (minute)) / second);

                //do something later when date is reached
                if (distance < 0) {
                document.getElementById(countdown_id).style.display = "none";
                document.getElementById(label_id).style.display = "block";
                clearInterval(x);
                }
                //seconds
            }, 0)
           

    }

    // ==== Advance Slider Activation ====
    var WidgetAdvanceSliderHandler = function($scope, $) {
        var $sliderElem = $scope.find('.edubin-advance-slider-active').eq(0);
        var settings = $sliderElem.data('settings');
    
        var autoPlay = settings['autoplay'];
        var autoplaySpeed = parseInt(settings['autoplay_speed']) || 3000;
        var pauseOnHover = settings['pause_on_hover'];
        var pauseOnInteraction = settings['pause_on_interaction'];
        var infiniteLoop = settings['infinite_loop'];
    
        var autoplayOptions = autoPlay ? {
            delay: autoplaySpeed,
            pauseOnMouseEnter: pauseOnHover,
            disableOnInteraction: pauseOnInteraction,
        } : false;
    
        var sliderSwiperParams = {
            loop: infiniteLoop,
            slidesPerView: 1,
            effect: "fade",
            pagination: {
                el: $sliderElem.find('.slider-pagination')[0], // Using [0] to get the DOM element
                clickable: true,
            },
            navigation: {
                nextEl: $sliderElem.find('.slider-next')[0],
                prevEl: $sliderElem.find('.slider-prev')[0],
            },
            autoplay: autoplayOptions,
        };
    
        // Generate a unique selector for the Swiper container
        var $swiperContainer = $sliderElem.find('.tpc-slider-carousel');
        var uniqueId = 'swiper-container-' + Math.random().toString(36).substr(2, 9);
        $swiperContainer.addClass(uniqueId);
    
        new Swiper('.' + uniqueId, sliderSwiperParams);
    };

     // ==== Service Box addon ====
    
    var WidgetServiceCarouselHandler = function($scope, $) {
        var $courseSliderElem = $scope.find('.edubin-service-activation>.swiper-wrapper').eq(0);
        
        var infiniteLoop = $courseSliderElem.attr('data-infiniteLoop') === 'true';
        var autoPlay = $courseSliderElem.attr('data-autoplay') === 'true';
        var autoplaySpeed = parseInt($courseSliderElem.attr('data-autoplaySpeed')) || 3000;
        var displayColumns = parseInt($courseSliderElem.attr('data-displayColumns')) || 3;
        var itemGap = parseInt($courseSliderElem.attr('data-itemGap')) || 20;
        // var centerSlides = $courseSliderElem.attr('data-centerSlides') === 'true';
        var pauseOnHover = $courseSliderElem.attr('data-pauseOnHover') === 'true';
        var pauseOnInteraction = $courseSliderElem.attr('data-pauseOnInteraction') === 'true';
        
        var displayColumnsTablet = parseInt($courseSliderElem.attr('data-displayColumnsTablet')) || 2;
        var tabletItemGap = parseInt($courseSliderElem.attr('data-tabletItemGap')) || 20;
        // var centerSlidesTab = $courseSliderElem.attr('data-centerSlidesTablet') === 'true';
        
        var displayColumnsMobile = parseInt($courseSliderElem.attr('data-displayColumnsMobile')) || 1;
        var mobileItemGap = parseInt($courseSliderElem.attr('data-mobileItemGap')) || 0;
        // var centerSlidesMobile = $courseSliderElem.attr('data-centerSlidesMobile') === 'true';
    
        var autoplayOptions = autoPlay ? {
            delay: autoplaySpeed,
            pauseOnMouseEnter: pauseOnHover,
            disableOnInteraction: pauseOnInteraction,
        } : false;
    
        var myswiperParamsCourse = {
            spaceBetween: itemGap,
            slidesPerView: displayColumns,
            loop: infiniteLoop,
            // centeredSlides: centerSlides,
            pagination: {
                el: $courseSliderElem.closest('.edubin-service-activation').find('.service-pagination')[0], // Using [0] to get the DOM element
                clickable: true,
            },
            navigation: {
                nextEl: $courseSliderElem.closest('.edubin-service-activation').find('.service-pg-next')[0],
                prevEl: $courseSliderElem.closest('.edubin-service-activation').find('.service-pg-prev')[0],
            },
            autoplay: autoplayOptions,
            breakpoints: {
                0: {
                    slidesPerView: displayColumnsMobile,
                    spaceBetween: mobileItemGap,
                    // centeredSlides: centerSlidesMobile,
                },
                575: {
                    slidesPerView: displayColumnsTablet,
                    spaceBetween: tabletItemGap,
                    // centeredSlides: centerSlidesTab,
                },
                992: {
                    slidesPerView: displayColumns,
                    // centeredSlides: centerSlides,
                },
            }
        };
    
        // Generate a unique selector for the Swiper container
        var $swiperContainer = $courseSliderElem.closest('.edubin-service-activation');
        var uniqueId = 'swiper-container-' + Math.random().toString(36).substr(2, 9);
        $swiperContainer.addClass(uniqueId);
    
        new Swiper('.' + uniqueId, myswiperParamsCourse);
    };

    // ==== Animation Addon ====
    var WidgetAnimationHandler = function($scope, $) {

        var dept_selector = $( ".edubin-animation-widget" ).attr( "id" );

        var value =  $( dept_selector  ).attr("data-depth");

        $( ".edubin-mouse-track-item" ).each( function () {
            var parallaxInstance = new Parallax(this);
    
            parallaxInstance.scalar(value, value);
        });
        
    }
  // ==== Info Box Addon ====
    var WidgetInfoBoxAnimationHandler = function($scope, $) {

        var dept_selector = $( ".edubin-info-box-animation" ).attr( "id" );

        var value =  $( dept_selector  ).attr("data-depth");

        $( ".edubin-mouse-track-item" ).each( function () {
            var parallaxInstance = new Parallax(this);
    
            parallaxInstance.scalar(value, value);
        });
        
    }
     // ==== Nav menu addon ====
    var WidgetNavMenuHandler = function($scope, $) {
        //===== Mobile Menu
        $('.edubin-elementor-mobile-hamburger-menu').click(function() {
            $(".edubin-elementor-mobile-hamburger-menu > a").toggleClass('edubin-mobile-menu-close--active');
            $(".edubin-elementor-mobile-menu-nav-wrapper").toggleClass('edubin-mobile-menu-visible');
            $('body').toggleClass('edubin-mobile-menu-active');
        });
        //===== Mobile Menu Close Button
        $('.edubin-elementor-mobile-menu-close > a').click(function() {
            $('.edubin-elementor-mobile-hamburger-menu > a').removeClass('edubin-mobile-menu-close--active');
            $('.edubin-elementor-mobile-menu-nav-wrapper').removeClass('edubin-mobile-menu-visible');
            $('body').removeClass('edubin-mobile-menu-active');
        });
        //===== Mobile menu close while click outside
        $('.edubin-elementor-mobile-menu-overlay').click(function() {
            $('.edubin-elementor-mobile-hamburger-menu > a').removeClass('edubin-mobile-menu-close--active');
            $('.edubin-elementor-mobile-menu-nav-wrapper').removeClass('edubin-mobile-menu-visible');
            $('body').removeClass('edubin-mobile-menu-active');
        });

        // mav menu and submenu show/hide 
        $.fn.extend({
            accordionMenu: function(options){
                
                // Set the default options
                var defaults = {
                speed: 400
                }
                var options =  $.extend(defaults, options);

                return this.each(function(){
                
                    $(this).addClass('edubin-elementor-mobile-menu-item');
                    var menuItems = $(this).children('li');
                    menuItems.find('.edubin-elementor-mobile-menu-item > .edubin-dropdown-menu').parent().addClass('menu-item-has-children');
                    $('.edubin-elementor-mobile-menu-item .menu-item-has-children .edubin-dropdown-menu').hide();
                    $('.edubin-elementor-mobile-menu-item .menu-item-has-children > a').on('click', function(event) {
                        event.stopPropagation();
                        event.preventDefault();
                        $(this).siblings().slideToggle(options.speed);
                    });
                
                });
            }
        });
        $('#edubin-elementor-mobile-menu-item').accordionMenu();
    }


    var WidgetCourseSliderHandler = function($scope, $) {
        var $courseSliderElem = $scope.find('.edubin-lms-courses-slider>.swiper-wrapper').eq(0);
        
        var infiniteLoop = $courseSliderElem.attr('data-infiniteLoop') === 'true';
        var autoPlay = $courseSliderElem.attr('data-autoplay') === 'true';
        var autoplaySpeed = parseInt($courseSliderElem.attr('data-autoplaySpeed')) || 3000;
        var displayColumns = parseInt($courseSliderElem.attr('data-displayColumns')) || 3;
        var itemGap = parseInt($courseSliderElem.attr('data-itemGap')) || 20;
        var centerSlides = $courseSliderElem.attr('data-centerSlides') === 'true';
        var pauseOnHover = $courseSliderElem.attr('data-pauseOnHover') === 'true';
        var pauseOnInteraction = $courseSliderElem.attr('data-pauseOnInteraction') === 'true';
        
        var displayColumnsTablet = parseInt($courseSliderElem.attr('data-displayColumnsTablet')) || 2;
        var tabletItemGap = parseInt($courseSliderElem.attr('data-tabletItemGap')) || 20;
        var centerSlidesTab = $courseSliderElem.attr('data-centerSlidesTablet') === 'true';
        
        var displayColumnsMobile = parseInt($courseSliderElem.attr('data-displayColumnsMobile')) || 1;
        var mobileItemGap = parseInt($courseSliderElem.attr('data-mobileItemGap')) || 0;
        var centerSlidesMobile = $courseSliderElem.attr('data-centerSlidesMobile') === 'true';
    
        var autoplayOptions = autoPlay ? {
            delay: autoplaySpeed,
            pauseOnMouseEnter: pauseOnHover,
            disableOnInteraction: pauseOnInteraction,
        } : false;
    
        var myswiperParamsCourse = {
            spaceBetween: itemGap,
            slidesPerView: displayColumns,
            loop: infiniteLoop,
            centeredSlides: centerSlides,
            pagination: {
                el: $courseSliderElem.closest('.edubin-lms-courses-slider').find('.slider-course-pegination')[0], // Using [0] to get the DOM element
                clickable: true,
            },
            navigation: {
                nextEl: $courseSliderElem.closest('.tpc-slider-wrapper-arrows-enable').find('.slide-next')[0],
                prevEl: $courseSliderElem.closest('.tpc-slider-wrapper-arrows-enable').find('.slide-prev')[0],
            },
            autoplay: autoplayOptions,
            breakpoints: {
                0: {
                    slidesPerView: displayColumnsMobile,
                    spaceBetween: mobileItemGap,
                    centeredSlides: centerSlidesMobile,
                },
                575: {
                    slidesPerView: displayColumnsTablet,
                    spaceBetween: tabletItemGap,
                    centeredSlides: centerSlidesTab,
                },
                992: {
                    slidesPerView: displayColumns,
                    centeredSlides: centerSlides,
                },
            }
        };
    
        // Generate a unique selector for the Swiper container
        var $swiperContainer = $courseSliderElem.closest('.edubin-lms-courses-slider');
        var uniqueId = 'swiper-container-' + Math.random().toString(36).substr(2, 9);
        $swiperContainer.addClass(uniqueId);
    
        new Swiper('.' + uniqueId, myswiperParamsCourse);
    };

    var WidgetWooProductHandler = function($scope, $) {
        var $wooProductElem = $scope.find('.woocommerce-addons-wrapper>.swiper-wrapper').eq(0);
        
        var infiniteLoop = $wooProductElem.attr('data-infiniteLoop') === 'true';
        var autoPlay = $wooProductElem.attr('data-autoplay') === 'true';
        var autoplaySpeed = parseInt($wooProductElem.attr('data-autoplaySpeed')) || 3000;
        var displayColumns = parseInt($wooProductElem.attr('data-displayColumns')) || 3;
        var itemGap = parseInt($wooProductElem.attr('data-itemGap')) || 20;
        var pauseOnHover = $wooProductElem.attr('data-pauseOnHover') === 'true';
        var pauseOnInteraction = $wooProductElem.attr('data-pauseOnInteraction') === 'true';
        
        var displayColumnsTablet = parseInt($wooProductElem.attr('data-displayColumnsTablet')) || 2;
        var tabletItemGap = parseInt($wooProductElem.attr('data-tabletItemGap')) || 20;
        
        var displayColumnsMobile = parseInt($wooProductElem.attr('data-displayColumnsMobile')) || 1;
        var mobileItemGap = parseInt($wooProductElem.attr('data-mobileItemGap')) || 0;
    
        var autoplayOptions = autoPlay ? {
            delay: autoplaySpeed,
            pauseOnMouseEnter: pauseOnHover,
            disableOnInteraction: pauseOnInteraction,
        } : false;
    
        var mySwiperParamsWoo = {
            spaceBetween: itemGap,
            slidesPerView: displayColumns,
            loop: infiniteLoop,
            pagination: {
                el: $scope.find('.woo-pagination')[0], // Using [0] to get the DOM element
                clickable: true,
            },
            navigation: {
                nextEl: $scope.find('.woo-next')[0],
                prevEl: $scope.find('.woo-prev')[0],
            },
            autoplay: autoplayOptions,
            breakpoints: {
                0: {
                    slidesPerView: displayColumnsMobile,
                    spaceBetween: mobileItemGap,
                },
                575: {
                    slidesPerView: displayColumnsTablet,
                    spaceBetween: tabletItemGap,
                },
                992: {
                    slidesPerView: displayColumns,
                },
            }
        };
    
        // Generate a unique selector for the Swiper container
        var $swiperContainer = $wooProductElem.closest('.woocommerce-addons-wrapper');
        var uniqueId = 'swiper-container-' + Math.random().toString(36).substr(2, 9);
        $swiperContainer.addClass(uniqueId);
    
        new Swiper('.' + uniqueId, mySwiperParamsWoo);
    };

    var WidgetEventSliderHandler = function($scope, $) {
        var $courseSliderElem = $scope.find('.tpc-events-slider>.swiper-wrapper').eq(0);
        
        var infiniteLoop = $courseSliderElem.attr('data-infiniteLoop') === 'true';
        var autoPlay = $courseSliderElem.attr('data-autoplay') === 'true';
        var autoplaySpeed = parseInt($courseSliderElem.attr('data-autoplaySpeed')) || 3000;
        var displayColumns = parseInt($courseSliderElem.attr('data-displayColumns')) || 3;
        var itemGap = parseInt($courseSliderElem.attr('data-itemGap')) || 20;
        var centerSlides = $courseSliderElem.attr('data-centerSlides') === 'true';
        var pauseOnHover = $courseSliderElem.attr('data-pauseOnHover') === 'true';
        var pauseOnInteraction = $courseSliderElem.attr('data-pauseOnInteraction') === 'true';
        
        var displayColumnsTablet = parseInt($courseSliderElem.attr('data-displayColumnsTablet')) || 2;
        var tabletItemGap = parseInt($courseSliderElem.attr('data-tabletItemGap')) || 20;
        var centerSlidesTab = $courseSliderElem.attr('data-centerSlidesTablet') === 'true';
        
        var displayColumnsMobile = parseInt($courseSliderElem.attr('data-displayColumnsMobile')) || 1;
        var mobileItemGap = parseInt($courseSliderElem.attr('data-mobileItemGap')) || 0;
        var centerSlidesMobile = $courseSliderElem.attr('data-centerSlidesMobile') === 'true';
    
        var autoplayOptions = autoPlay ? {
            delay: autoplaySpeed,
            pauseOnMouseEnter: pauseOnHover,
            disableOnInteraction: pauseOnInteraction,
        } : false;
    
        var myswiperParamsCourse = {
            spaceBetween: itemGap,
            slidesPerView: displayColumns,
            loop: infiniteLoop,
            centeredSlides: centerSlides,
            pagination: {
                el: $courseSliderElem.closest('.tpc-events-slider').find('.slider-events-pegination')[0], // Using [0] to get the DOM element
                clickable: true,
            },
            navigation: {
                nextEl: $courseSliderElem.closest('.tpc-events-slider').find('.slide-next')[0],
                prevEl: $courseSliderElem.closest('.tpc-events-slider').find('.slide-prev')[0],
            },
            autoplay: autoplayOptions,
            breakpoints: {
                0: {
                    slidesPerView: displayColumnsMobile,
                    spaceBetween: mobileItemGap,
                    centeredSlides: centerSlidesMobile,
                },
                575: {
                    slidesPerView: displayColumnsTablet,
                    spaceBetween: tabletItemGap,
                    centeredSlides: centerSlidesTab,
                },
                992: {
                    slidesPerView: displayColumns,
                    centeredSlides: centerSlides,
                },
            }
        };
    
        // Generate a unique selector for the Swiper container
        var $swiperContainer = $courseSliderElem.closest('.tpc-events-slider');
        var uniqueId = 'swiper-container-' + Math.random().toString(36).substr(2, 9);
        $swiperContainer.addClass(uniqueId);
    
        new Swiper('.' + uniqueId, myswiperParamsCourse);
    };


    // === Add JavaScript to Widgets ====
    $(window).on('elementor/frontend/init', function() {

        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-testimonial-addons.default', WidgetTestimonialCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-icon-category-addons.default', WidgetCategoryCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-counter.default', WidgetCounterHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-countdown.default', WidgetCountdown);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-accordion.default', WidgetAccordionsMapHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-slider-addons.default', WidgetAdvanceSliderHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-services-box.default', WidgetServiceCarouselHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-nav-menu.default', WidgetNavMenuHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-animation.default', WidgetAnimationHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-info-box.default', WidgetInfoBoxAnimationHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-woo-product-addons.default', WidgetWooProductHandler);

        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-course-filter.default', WidgetCourseFilter);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-course-filter-ld.default', WidgetCourseFilter);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-course-filter-tutor.default', WidgetCourseFilter);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-course-filter-sensei.default', WidgetCourseFilter);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-course-filter-ms.default', WidgetCourseFilter);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-course-filter-lif.default', WidgetCourseFilter);


        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-lpcourse-addons.default', WidgetCourseIsotope);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-ldcourse-addons.default', WidgetCourseIsotope);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-tutor-course-addons.default', WidgetCourseIsotope);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-sensei-course.default', WidgetCourseIsotope);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-ms-courses.default', WidgetCourseIsotope);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-lif-courses.default', WidgetCourseIsotope);

        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-lpcourse-addons.default', WidgetCourseSliderHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-ldcourse-addons.default', WidgetCourseSliderHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-tutor-course-addons.default', WidgetCourseSliderHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-sensei-course.default', WidgetCourseSliderHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-ms-courses.default', WidgetCourseSliderHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-lif-courses.default', WidgetCourseSliderHandler);

        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-events.default', WidgetEventSliderHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/edubin-wpem.default', WidgetEventSliderHandler);

    });

})(jQuery);