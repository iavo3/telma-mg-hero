jQuery(($) => {

    $(document).ready(function () {

        var
            cs = false,
            st = { pointerEvents: "none", opacity: 0.12 },
            this_hash = $('.launch_prov')[0] !== undefined ?? $('.launch_prov')[0].getAttribute('href');

        $('.launch_prov').css(st).attr('href', '#');

        $('#is_ok').on('change', function () {

            cs = $('#is_ok').is(":checked") ? true : false;
            if (cs === true) {
                $(".dbc-msisdn-form").removeAttr("disabled")
                st = { pointerEvents: "all", opacity: 1 };
                hs = this_hash;
            } else {
                $(".dbc-msisdn-form").attr("disabled", "true")

                st = { pointerEvents: "none", opacity: 0.12 };
                hs = "#";
            }
            $('.launch_prov').css(st).attr('href', hs);
        });

        $(window).on('resize', function () {
            $(this).width() > 1024 ? $('.wrapper-clone').show() : $('.wrapper-clone').hide();
        });

        $(window).on('scroll', function () {
            $(this).scrollTop() > 0 ? $('.tp_hd').addClass('sticky_top') : $('.tp_hd').removeClass('sticky_top');
        });

    });
})