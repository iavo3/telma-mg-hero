window.addEventListener("scroll", () => {
    $('.header-wrapper').prop("classList").toggle("nav-sticky", window.scrollY > 0)
    $('.header-area').prop("classList").toggle("nav-scoll-bg", window.scrollY > 0)
    $('.brand').prop("classList").toggle("scale-on-scroll", window.scrollY > 0)


    $('.header-left').prop("classList").toggle("scale-height", window.scrollY > 0)
})


$(".mobileheader-left").click(() => {
    $(".main-content").addClass("hide-main-content")
})
$(".tpmobilemenu-parta3").click(() => {
    $(".main-content").removeClass("hide-main-content")
})


