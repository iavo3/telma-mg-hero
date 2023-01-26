  $(function() {
    $('.grid').masonry({
        columnWidth: 200,
        itemSelector: '.grid-item',
        gutter: 10,
        //gutter: '.gutter-sizer'
        horizontalOrder: true
    });
  });