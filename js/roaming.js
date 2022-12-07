$(function() {
    var tb = $('#tarif-outbound'),
        ld = $('.loading');

    var list = [
        { 
            "Pays": "Maurice", 
            "Opérateurs partenaires": "EMTEL" ,
            "Appel entrant": "1400",
            " Appel local": "2000",
            "ppel vers Mada": "4700",
            "Appel vers autres destinations": "12000",
            "SMS sortant vers toutes destinations": "800",
            "SMS entrant": "Gratuit"
        },
        { 
            "Pays": "Afrique du Sud", 
            "Opérateurs partenaires": "VODACOM" ,
            "Appel entrant": "1400",
            " Appel local": "2800",
            "ppel vers Mada": "5500",
            "Appel vers autres destinations": "13300",
            "SMS sortant vers toutes destinations": "800",
            "SMS entrant": "Gratuit"
        },
        { 
            "Pays": "Suisse", 
            "Opérateurs partenaires": "SWISSCOM" ,
            "Appel entrant": "1400",
            " Appel local": "6300",
            "ppel vers Mada": "25500",
            "Appel vers autres destinations": "25500",
            "SMS sortant vers toutes destinations": "2300",
            "SMS entrant": "Gratuit"
        },
        { 
            "Pays": "Suisse", 
            "Opérateurs partenaires": "SWISSCOM" ,
            "Appel entrant": "1400",
            " Appel local": "6300",
            "ppel vers Mada": "25500",
            "Appel vers autres destinations": "25500",
            "SMS sortant vers toutes destinations": "2300",
            "SMS entrant": "Gratuit"
        }
    ];

    $('#country-filter option').each(function(index, _this){
        let _val = $(_this).text();
        $(_this).attr('value', _val);
    });

    constructTable('#tarif-outbound');   

    tb.hide(); ld.hide();

    $('#country-filter').change( function(){
        var selection = $(this).val(),
            dataset = tb.find('tr');

        dataset.each(function(index, el) {
            var item = $(el),
                text = item.find('td:first-child').text();

            item.next('tr').hide(); 
            ld.show(); 

            if (text == selection){
                setTimeout(function() { 
                    ld.hide();
                    tb.show();
                    item.show();
                }, 500);
            }
            
        });
        
    });
         
    function constructTable(selector) {
         
        var cols = Headers(list, selector); 

        for (var i = 0; i < list.length; i++) {
            var row = $('<tr/>');  
            for (var colIndex = 0; colIndex < cols.length; colIndex++)
            {
                var val = list[i][cols[colIndex]];
                if (val == null) val = ""; 
                    row.append($('<td/>').html(val));
            }
             
            $(selector).append(row);
        }
    }
     
    function Headers(list, selector) {
        var columns = [];
        var header = $('<tr/>');
         
        for (var i = 0; i < list.length; i++) {
            var row = list[i];
             
            for (var k in row) {
                if ($.inArray(k, columns) == -1) {
                    columns.push(k);
                    header.append($('<th/>').html(k));
                }
            }
        }
         
        $(selector).append(header);
            return columns;
    }      

});