$(function() {
    var tb = $('#tarif-outbound'),
        ld = $('.loading');

    $('#country-filter option').each(function(index, _this){
        let _val = $(_this).text();
        $(_this).attr('value', _val);
    });

    tb.hide(); ld.hide();

    $('#country-filter').change( function(){
        var selection = $(this).val(),
            dataset = tb.find('tbody tr');

        dataset.each(function(index, el) {
            var item = $(el);
            tb.hide();
            item.hide();

            var text = item.find('td:first-child').text();

            ld.show();
            if (text == selection){
                setTimeout(function() { 
                    ld.hide(); tb.show(); item.show();
                }, 500);
            }
            
        });
    });

});