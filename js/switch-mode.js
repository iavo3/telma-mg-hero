$(document).ready(() => {

    $(".switcher-cursor").html('<i class="fas fa-moon"></i>')

    $(".switcher-cursor").click(() => {
        let switchPos = parseFloat($(".switcher-cursor").css("left"))
        if (switchPos !== 0) {

            $(".switcher-cursor").css({ "left": "0", "transition": "ease 0.2s" })
            $(".switcher-cursor").html('<i class="fas fa-sun"></i>')

            $(".switchable-theme").addClass("custom-bg-light")
            $(".header-area1").addClass("switchable-header")

        }
        if (switchPos === 0) {
            $(".switcher-cursor").css({ "left": "25px", "transition": "ease 0.2s" })
            $(".switcher-cursor").html('<i class="fas fa-moon"></i>')
            $(".switchable-theme").removeClass("custom-bg-light")
            $(".header-area1").removeClass("switchable-header")

        }

    })
})