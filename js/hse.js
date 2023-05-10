  $(function() {
    $('.bx-eng--list-wrapper').find('li').each(function(index, _this){
      let a = $(_this).html(),
          b = index + 1;
      $(_this).html('<span>' + b + '</span>' + a);
    });

    $('.hero-text').find('a').click(function () {
        $('html, body').animate({
            scrollTop: $('.sec-faq').offset().top
        }, 500);
    
        return false;
    });
  });