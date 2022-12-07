jQuery(($) => {

    $(document).ready(() => {
        // jQuery.noConflict()

        $(".doubleClick-body").attr("style", "background: url(/img/doubleClick/bg-footer.svg) no-repeat center bottom/100% auto")

        let msisdn = $(".msisdn-input").val()
        let missingMsisdn = $(".missing-msisdn-input").val()
        let response = $(".response-input").val()

        if (response !== undefined && response.trim() === "true" && msisdn !== " ") {
            // jQuery.noConflict()
            $('#dbClickModal').modal('show')

            $(".modal-body").text("Votre numéro " + msisdn + " a été crédité de 1h de data, valable pendant 24h.")
        }
        if (response !== undefined && response.trim() === "false" && msisdn !== " ") {

            // jQuery.noConflict()
            $('#dbClickModal').modal('show')
            $(".modal-body").text("Votre approvisionnement en bouquet First 1 000Ar a échoué.")
            $(".dismiss-btn").text("Réessayer")
        }

        if (missingMsisdn !== undefined && missingMsisdn.trim() === "true") {
            // jQuery.noConflict()

            $('#dbClickModal').modal('show')
            $(".modal-body").text("Aucun msisdn n'a été trouvé.")
            $(".dismiss-btn").text("Réessayer")

        }

        $(".dbclick-btn-yellow").click(() => {
            $('#dbClickModal').modal('hide')

            window.location.assign('/double/click')
        })
    })
})
