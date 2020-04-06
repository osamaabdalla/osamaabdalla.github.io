jQuery(document).ready(function($) {

    // Switcher
    $(".switcher-icon").click(function(){

        switcher_mode = $('.switcher-icon').attr('switcher-data');
        if (switcher_mode == 'Close') {

            $(".style-switcher").animate({left : '0'}, 250);
            $('.switcher-icon').attr('switcher-data', 'Open');

        } else {

            $(".style-switcher").animate({left : '-150px'}, 250);
            $('.switcher-icon').attr('switcher-data', 'Close');

        }

    });

    $(".colorblue").click(function(){
        $("#switcher").attr("href", "css/colors/blue.css");
        return false;
    });

    $(".sea-green").click(function(){
        $("#switcher").attr("href", "css/colors/sea-green.css");
        return false;
    });

    $(".green").click(function(){
        $("#switcher").attr("href", "css/colors/green.css");
        return false;
    });

    $(".yellow").click(function(){
        $("#switcher").attr("href", "css/colors/yellow.css");
        return false;
    });

    $(".orange").click(function(){
        $("#switcher").attr("href", "css/colors/orange.css");
        return false;
    });

    $(".red").click(function(){
        $("#switcher").attr("href", "css/colors/red.css");
        return false;
    });

    $(".pink").click(function(){
        $("#switcher").attr("href", "css/colors/pink.css");
        return false;
    });

    $(".marsala").click(function(){
        $("#switcher").attr("href", "css/colors/marsala.css");
        return false;
    });

    $(".gold").click(function(){
        $("#switcher").attr("href", "css/colors/gold.css");
        return false;
    });

    $(".olive").click(function(){
        $("#switcher").attr("href", "css/colors/olive.css");
        return false;
    });

    $(".silver").click(function(){
        $("#switcher").attr("href", "css/colors/silver.css");
        return false;
    });

    $(".red-two").click(function(){
        $("#switcher").attr("href", "css/colors/red-two.css");
        return false;
    });

});