(function($){
    $(document).ready(function (){
        jQuery(".topheader-right ul li:nth-child(1)").click(function() {
            jQuery(".topheader-right_app").slideToggle();
        });

        jQuery(".menu1").click(function() {
            jQuery(".mobilemenu-area").show();
        });


        jQuery(".tpmobilemenu-parta3 i").click(function() {
            jQuery(".mobilemenu-area").hide();
        });

        jQuery(".topheader-right ul li:nth-child(6)").click(function() {
            jQuery(".topheader-right_media").slideToggle();
        });

        jQuery(".header-inner ul li:nth-child(1) a").hover(function() {
            jQuery(".menuheadera1").slideDown();
        }, function () {
            jQuery(".menuheadera1").stop(true, true).slideUp();
        });

        jQuery(".menuheadera1").hover(function() {
            jQuery(this).stop();
        }, function () {
            jQuery(this).stop(true, true).slideUp();
        });

        jQuery(".header-inner ul li:nth-child(2) a").hover(function() {
            jQuery(".menuheadera2").slideDown();
        }, function () {
            jQuery(".menuheadera2").stop(true, true).slideUp();
        });

        jQuery(".menuheadera2").hover(function() {
            jQuery(this).stop();
        }, function () {
            jQuery(this).stop(true, true).slideUp();
        });

        jQuery(".header-inner ul li:nth-child(3) a").hover(function() {
            jQuery(".menuheadera3").slideDown();
        }, function () {
            jQuery(".menuheadera3").stop(true, true).slideUp();
        });

        jQuery(".menuheadera3").hover(function() {
            jQuery(this).stop();
        }, function () {
            jQuery(this).stop(true, true).slideUp();
        });

        jQuery(".header-inner ul li:nth-child(4) a").hover(function() {
            jQuery(".menuheadera4").slideDown();
        }, function () {
            jQuery(".menuheadera4").stop(true, true).slideUp();
        });

        jQuery(".menuheadera4").hover(function() {
            jQuery(this).stop();
        }, function () {
            jQuery(this).stop(true, true).slideUp();
        });

        jQuery(".tosms-part ul li:nth-child(5) a").click(function() {
            jQuery(".tosmsfiltre-area").slideToggle();
        });

        jQuery(".tosms-part ul li:nth-child(6) a").click(function() {
            jQuery(".tosmsfiltre-area").slideToggle();
        });
    });
})(jQuery);
