if ($("#double-click").is(":visible")) {

} else {
    $("#brand_section").removeClass("d-none")
    $(".top-bar").removeClass("d-none")
    $(".right-side").addClass(" md:mx-16 py-6")
    $("#right-side-container").addClass("lg:w-4/6")

}

if ($("#user-prov").is(":visible")) {
    $("#brand_section").addClass("d-none")
    $("#promo-flyer-section").removeClass("d-none")
    $(".top-bar").addClass("d-none")


    $(".right-side").removeClass("justify-center")
    $(".right-side").addClass("justify-start")
    $(".right-side").removeClass(" md:mx-32 py-6")
    $(".right-side").addClass(" md:mx-24 py-0")

    $("#right-side-container").addClass("lg:w-4/6")
    $("#right-side-container").attr("style", "padding: 24px !important;")

    $(".content-section").attr("style", "margin-top:0 !important")
    $(".top-bar").attr("style", "display: none !important");

    if ($(".promo_foot").length > 0){
        $("#promo-flyer-section img").attr("src","/img/ttv-cdm-gratoss.jpg");
    }

}
if (!($(".user-prov-alert").is(":visible"))) {
    $("#right-side-container").addClass("lg:w-4/6")
    $(".content_wrapper").removeClass("flex-col")
    $("#brand_section").removeClass("w-full")
    $("#promo-flyer-section").removeClass("w-full")

    $(".promo-footer-content").attr("style", "margin-top:24px !important")
    $(".alert").attr("style", "position:relative !important;top:0 !important")

}

if (!($(".user-prov-alert").is(":visible")) && !($("#double-click").is(":visible"))) {
    $(".top-bar").removeClass("d-none")

}
if (($(".user-prov-alert").is(":visible"))) {
    setTimeout(() => {
        ($(".user-prov-alert")).addClass("d-none")
    }, 2000)
}



