var count = -1;
var slides = jQuery.makeArray($('#slides article')), //base 0
    totalSlides = slides.length - 1;
var startPos = {"top": '100%', "z-index": "20"},
    endPos = {'top': '0px', "z-index": "2"},
    prevPos = {'top': '-100%', "z-index": "0"},
    transit = {"transition": "top 800ms ease 1s", "transition-delay": "0.5s"},
    nonetrans = {"transition": "none"},
    translateLeft = {"transform": "translate(-160vw, 0vh)", "transition": "ease-in-out 1.8s"},
    translateRight = {"transform": "translateX(0vw) ", "transition": "ease 1.5s"},
    translateFix = {"transform": "translate(0vw, 0vh) ", "transition": "ease 1.2s"},
    translateresetY = {"transform": "translateY(0vh) ", "transition": "ease 1.2s",},
    slideUp = {"transform": "translateY(-1980px)", "transition": "ease-in-out 1.8s"},
    slideDown = {"transform": "translateY(0vh)", "transition": "ease-in-out 1.4s"},
    timer = null;


function advance() {
    if (count == totalSlides) {
        $(slides[count]).animate(startPos, 0).css(transit);
        count = 0;
        $(slides[count]).css(prevPos).css(nonetrans);
        $(slides[count]).animate(endPos, 0).css(transit);
        var itemChilds = $(slides[count]).find("div")
        $(itemChilds[4]).css(translateFix)

        var pastel = ($(itemChilds[5]).find("img"))
        $(pastel[0]).css(translateresetY)

        var mpastel = ($(itemChilds[7]).find("img"))
        $(mpastel[0]).css(translateresetY)

    } else {
        var itemChilds = $(slides[count]).find("div");
        $(itemChilds[4]).css(translateLeft);

        var pastel = ($(itemChilds[5]).find("img"))
        $(pastel[0]).css(slideUp)

        var mpastel = ($(itemChilds[7]).find("img"))
        $(mpastel[0]).css(slideUp)

        $(slides[count]).animate(startPos, 0).css(transit);
        count++;
        $(slides[count]).css(prevPos).css(nonetrans);
        $(slides[count]).animate(endPos, 0).css(transit);

        var itemChilds = $(slides[count]).find("div")
        $(itemChilds[4]).css(translateFix)

        var pastel = ($(itemChilds[5]).find("img"))
        $(pastel[0]).css(translateresetY)

        var mpastel = ($(itemChilds[7]).find("img"))
        $(mpastel[0]).css(translateresetY)


    }
}

function rewind() {

    if (count === 0) {
        $(slides[count]).animate(prevPos, 0).css(transit);
        count = totalSlides;
        $(slides[count]).css(startPos).css(nonetrans);
        $(slides[count]).animate(endPos, 0).css(transit);
    } else {
        $(slides[count]).prev().css(startPos).css(nonetrans);
        $(slides[count]).animate(prevPos, 0).css(transit);
        count = count - 1;
        $(slides[count]).animate(endPos, 0).css(transit);

    }


}

//Dots functions
function selectDots() {
    n = count + 1;
    $('#dots li:nth-child(' + n + ')').addClass('selected');
    $('#dots li:nth-child(' + n + ')').siblings().removeClass('selected');
}

function clickDots() {

    $('#dots li').bind('click', function () {

        var index = $(this).index();
        if (count > index) {

            $(slides[count]).animate(prevPos, 0).css(transit);
            count = index;

            var itemChilds = $(slides[count]).find("div")
            $(itemChilds[4]).css(translateLeft)

            var pastel = ($(itemChilds[5]).find("img"))
            $(pastel[0]).css(slideDown)

            var mpastel = ($(itemChilds[7]).find("img"))
            $(mpastel[0]).css(slideDown)


            $(slides[count]).css(startPos).css(nonetrans);
            $(slides[count]).animate(endPos, 0).css(transit);

            $(itemChilds[4]).css(translateRight)


        } else if (count < index) {
            $(slides[count]).animate(startPos, 0).css(transit);
            count = index;

            var itemChilds = $(slides[count - 1]).find("div")
            $(itemChilds[4]).css(translateLeft)

            var pastel = ($(itemChilds[5]).find("img"))
            $(pastel[0]).css(slideUp)

            var mpastel = ($(itemChilds[7]).find("img"))
            $(mpastel[0]).css(slideUp)

            $(slides[count]).css(prevPos).css(nonetrans);
            $(slides[count]).animate(endPos, 0).css(transit);

        } else {
            return false;
        }
        selectDots();
        clearTimeout(timer);
        timer = setTimeout(playSlides, 7500);
        unbindBtn();
    });

}

//next and prev buttons

function upDown() {
    $('.next').bind('click', function () {
        advance();
        selectDots();
        clearTimeout(timer);
        timer = setTimeout(playSlides, 7500);
        unbindBtn();
    });

    $('.prev').bind('click', function () {
        if (count == -1) {
            count = 0;
        } else {
            rewind();
        }

        selectDots();
        clearTimeout(timer);
        timer = setTimeout(playSlides, 7500);
        unbindBtn();
    });
}

function unbindBtn() {
    $('.next,.prev,#dots li').unbind('click');
    setTimeout(upDown, 800);
    setTimeout(clickDots, 800);
}


//** Slideshow automatic slide function
function playSlides() {
    clickDots();
    upDown();

    function loop() {
        advance();
        selectDots();
        timer = setTimeout(loop, 50000);
        unbindBtn();
    }

    loop();
}


$(document).ready(function () {
    playSlides();
});
