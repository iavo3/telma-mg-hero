$(function() {
    var tb = $('#tarif-outbound'),
        ld = $('.loading'),
        select = $('#country-filter'),
        map = {};

    var list = [
        {
            "Pays": "Maurice",
            "Opérateurs partenaires": "EMTEL",
            " Appel entrant  ": "1 400",
            " Appel local ": "2 000",
            " Appel vers Mada  ": "4 700",
            " Appel vers autres destinations ": "12 000",
            " SMS sortant vers toutes destinations ": "800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Afrique du Sud",
            "Opérateurs partenaires": "VODACOM",
            " Appel entrant  ": "1 400",
            " Appel local ": "2 800",
            " Appel vers Mada  ": "5 500",
            " Appel vers autres destinations ": "13 300",
            " SMS sortant vers toutes destinations ": "800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Suisse ",
            "Opérateurs partenaires": "SWISSCOM",
            " Appel entrant  ": "1 400",
            " Appel local ": "6 300",
            " Appel vers Mada  ": "25 500",
            " Appel vers autres destinations ": "25 500",
            " SMS sortant vers toutes destinations ": "2 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Kenya",
            "Opérateurs partenaires": "SAFARICOM",
            " Appel entrant  ": "6 500",
            " Appel local ": "3 400",
            " Appel vers Mada  ": "14 200",
            " Appel vers autres destinations ": "18 400",
            " SMS sortant vers toutes destinations ": "1 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Emirats Arabes Unis",
            "Opérateurs partenaires": "DU",
            " Appel entrant  ": "9 200",
            " Appel local ": "4 900",
            " Appel vers Mada  ": "28 000",
            " Appel vers autres destinations ": "28 000",
            " SMS sortant vers toutes destinations ": "3 000",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Seychelles",
            "Opérateurs partenaires": "CABLE & WIRELESS",
            " Appel entrant  ": "9 200",
            " Appel local ": "2 800",
            " Appel vers Mada  ": "9 500",
            " Appel vers autres destinations ": "9 500",
            " SMS sortant vers toutes destinations ": "1 900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Italie",
            "Opérateurs partenaires": "TIM",
            " Appel entrant  ": "10 800",
            " Appel local ": "7 000",
            " Appel vers Mada  ": "19 500",
            " Appel vers autres destinations ": "35 000",
            " SMS sortant vers toutes destinations ": "2 800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Etats-Unis",
            "Opérateurs partenaires": "AT&T",
            " Appel entrant  ": "1 400",
            " Appel local ": "1 400",
            " Appel vers Mada  ": "1 400",
            " Appel vers autres destinations ": "1 400",
            " SMS sortant vers toutes destinations ": "400",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Royaume-Uni",
            "Opérateurs partenaires": "VODAFONE",
            " Appel entrant  ": "1 400",
            " Appel local ": "4 700",
            " Appel vers Mada  ": "18 500",
            " Appel vers autres destinations ": "18 500",
            " SMS sortant vers toutes destinations ": "2 400",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Thaïlande",
            "Opérateurs partenaires": "TRUE MOVE (Real Future)",
            " Appel entrant  ": "5 300",
            " Appel local ": "3 900",
            " Appel vers Mada  ": "12 100",
            " Appel vers autres destinations ": "12 100",
            " SMS sortant vers toutes destinations ": "2 200",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Cote d'Ivoire",
            "Opérateurs partenaires": "MOOV",
            " Appel entrant  ": "7 300",
            " Appel local ": "3 600",
            " Appel vers Mada  ": "16 000",
            " Appel vers autres destinations ": "16 700",
            " SMS sortant vers toutes destinations ": "2 400",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Turquie",
            "Opérateurs partenaires": "TURKCELL",
            " Appel entrant  ": "7 300",
            " Appel local ": "7 400",
            " Appel vers Mada  ": "42 000",
            " Appel vers autres destinations ": "42 000",
            " SMS sortant vers toutes destinations ": "2 000",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Chine",
            "Opérateurs partenaires": "CHINA MOBILE",
            " Appel entrant  ": "1 500",
            " Appel local ": "4 100",
            " Appel vers Mada  ": "4 100",
            " Appel vers autres destinations ": "4 100",
            " SMS sortant vers toutes destinations ": "800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Belgique ",
            "Opérateurs partenaires": "BELGACOM - PROXIMUS",
            " Appel entrant  ": "6 900",
            " Appel local ": "12 900",
            " Appel vers Mada  ": "22 200",
            " Appel vers autres destinations ": "22 200",
            " SMS sortant vers toutes destinations ": "1 700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Comores",
            "Opérateurs partenaires": "COMORES TELECOM",
            " Appel entrant  ": "4 600",
            " Appel local ": "2 600",
            " Appel vers Mada  ": "12 500",
            " Appel vers autres destinations ": "38 200",
            " SMS sortant vers toutes destinations ": "1 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Comores",
            "Opérateurs partenaires": "TELCO COMORES",
            " Appel entrant  ": "4 600",
            " Appel local ": "2 600",
            " Appel vers Mada  ": "12 500",
            " Appel vers autres destinations ": "38 200",
            " SMS sortant vers toutes destinations ": "1 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Espagne",
            "Opérateurs partenaires": "XFERA",
            " Appel entrant  ": "3 800",
            " Appel local ": "2 400",
            " Appel vers Mada  ": "11 700",
            " Appel vers autres destinations ": "11 700",
            " SMS sortant vers toutes destinations ": "1 600",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Singapour",
            "Opérateurs partenaires": "STARHUB",
            " Appel entrant  ": "4 700",
            " Appel local ": "3 300",
            " Appel vers Mada  ": "10 800",
            " Appel vers autres destinations ": "10 800",
            " SMS sortant vers toutes destinations ": "1 900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Maroc",
            "Opérateurs partenaires": "IAM (Maroc Telecom)",
            " Appel entrant  ": "7 300",
            " Appel local ": "4 100",
            " Appel vers Mada  ": "4 100",
            " Appel vers autres destinations ": "4 100",
            " SMS sortant vers toutes destinations ": "900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Canada",
            "Opérateurs partenaires": "BELL",
            " Appel entrant  ": "9 400",
            " Appel local ": "7 300",
            " Appel vers Mada  ": "15 800",
            " Appel vers autres destinations ": "15 800",
            " SMS sortant vers toutes destinations ": "1 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Ethiopie",
            "Opérateurs partenaires": "ETHIO TELECOM",
            " Appel entrant  ": "11 000",
            " Appel local ": "5 900",
            " Appel vers Mada  ": "18 900",
            " Appel vers autres destinations ": "27 500",
            " SMS sortant vers toutes destinations ": "3 000",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Liban",
            "Opérateurs partenaires": "MIC2",
            " Appel entrant  ": "7 300",
            " Appel local ": "5 900",
            " Appel vers Mada  ": "8 900",
            " Appel vers autres destinations ": "8 900",
            " SMS sortant vers toutes destinations ": "1 700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Inde",
            "Opérateurs partenaires": "VODAFONE",
            " Appel entrant  ": "9 300",
            " Appel local ": "5 200",
            " Appel vers Mada  ": "10 400",
            " Appel vers autres destinations ": "10 400",
            " SMS sortant vers toutes destinations ": "2 100",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Hong Kong",
            "Opérateurs partenaires": "HUTCHISON",
            " Appel entrant  ": "3 500",
            " Appel local ": "2 100",
            " Appel vers Mada  ": "16 600",
            " Appel vers autres destinations ": "16 600",
            " SMS sortant vers toutes destinations ": "2 700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Sénégal",
            "Opérateurs partenaires": "TIGO SENTEL",
            " Appel entrant  ": "14 300",
            " Appel local ": "7 100",
            " Appel vers Mada  ": "17 800",
            " Appel vers autres destinations ": "19 200",
            " SMS sortant vers toutes destinations ": "2 100",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Bahreïn",
            "Opérateurs partenaires": "BATELCO",
            " Appel entrant  ": "12 500",
            " Appel local ": "5 400",
            " Appel vers Mada  ": "21 800",
            " Appel vers autres destinations ": "21 800",
            " SMS sortant vers toutes destinations ": "2 800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Australie",
            "Opérateurs partenaires": "VODAFONE",
            " Appel entrant  ": "15 000",
            " Appel local ": "7 700",
            " Appel vers Mada  ": "39 900",
            " Appel vers autres destinations ": "39 900",
            " SMS sortant vers toutes destinations ": "2 000",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Oman",
            "Opérateurs partenaires": "OMANTEL",
            " Appel entrant  ": "15 500",
            " Appel local ": "6 400",
            " Appel vers Mada  ": "22 200",
            " Appel vers autres destinations ": "22 200",
            " SMS sortant vers toutes destinations ": "2 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Russie",
            "Opérateurs partenaires": "MTS",
            " Appel entrant  ": "14 300",
            " Appel local ": "8 600",
            " Appel vers Mada  ": "42 800",
            " Appel vers autres destinations ": "50 600",
            " SMS sortant vers toutes destinations ": "3 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "On air",
            "Opérateurs partenaires": "AEROMOBILE",
            " Appel entrant  ": "40 900",
            " Appel local ": "30 500",
            " Appel vers Mada  ": "30 500",
            " Appel vers autres destinations ": "30 500",
            " SMS sortant vers toutes destinations ": "6 800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Allemagne",
            "Opérateurs partenaires": "TELEFONICA",
            " Appel entrant  ": "1 400",
            " Appel local ": "3 500",
            " Appel vers Mada  ": "3 500",
            " Appel vers autres destinations ": "3 500",
            " SMS sortant vers toutes destinations ": "800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Egypte",
            "Opérateurs partenaires": "ETISALAT",
            " Appel entrant  ": "11 200",
            " Appel local ": "3 900",
            " Appel vers Mada  ": "17 200",
            " Appel vers autres destinations ": "17 200",
            " SMS sortant vers toutes destinations ": "1 600",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Cameroun ",
            "Opérateurs partenaires": "ORANGE",
            " Appel entrant  ": "7 300",
            " Appel local ": "3 700",
            " Appel vers Mada  ": "27 800",
            " Appel vers autres destinations ": "27 800",
            " SMS sortant vers toutes destinations ": "2 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Koweït",
            "Opérateurs partenaires": "VIVA",
            " Appel entrant  ": "11 700",
            " Appel local ": "8 900",
            " Appel vers Mada  ": "71 000",
            " Appel vers autres destinations ": "71 000",
            " SMS sortant vers toutes destinations ": "3 400",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Arabie Saoudite",
            "Opérateurs partenaires": "ETISALAT",
            " Appel entrant  ": "7 300",
            " Appel local ": "6 300",
            " Appel vers Mada  ": "35 900",
            " Appel vers autres destinations ": "35 900",
            " SMS sortant vers toutes destinations ": "2 900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Réunion",
            "Opérateurs partenaires": "SRR",
            " Appel entrant  ": "2 700",
            " Appel local ": "3 900",
            " Appel vers Mada  ": "7 700",
            " Appel vers autres destinations ": "17 200",
            " SMS sortant vers toutes destinations ": "1 400",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Mayotte",
            "Opérateurs partenaires": "SRR",
            " Appel entrant  ": "2 700",
            " Appel local ": "3 900",
            " Appel vers Mada  ": "7 700",
            " Appel vers autres destinations ": "17 200",
            " SMS sortant vers toutes destinations ": "1 400",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Danemark",
            "Opérateurs partenaires": "TDC",
            " Appel entrant  ": "7 700",
            " Appel local ": "4 200",
            " Appel vers Mada  ": "20 900",
            " Appel vers autres destinations ": "20 900",
            " SMS sortant vers toutes destinations ": "2 100",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Pays Bas",
            "Opérateurs partenaires": "KPN",
            " Appel entrant  ": "2 100",
            " Appel local ": "6 300",
            " Appel vers Mada  ": "6 300",
            " Appel vers autres destinations ": "6 300",
            " SMS sortant vers toutes destinations ": "700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Pologne",
            "Opérateurs partenaires": "PLAY MOBILE P4",
            " Appel entrant  ": "1 800",
            " Appel local ": "1 900",
            " Appel vers Mada  ": "11 000",
            " Appel vers autres destinations ": "11 000",
            " SMS sortant vers toutes destinations ": "18 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Germany",
            "Opérateurs partenaires": "T Mobile",
            " Appel entrant  ": "5 100",
            " Appel local ": "4 600",
            " Appel vers Mada  ": "34 000",
            " Appel vers autres destinations ": "34 000",
            " SMS sortant vers toutes destinations ": "1 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Tunisie",
            "Opérateurs partenaires": "TUNTELL",
            " Appel entrant  ": "11 600",
            " Appel local ": "11 900",
            " Appel vers Mada  ": "23 100",
            " Appel vers autres destinations ": "23 100",
            " SMS sortant vers toutes destinations ": "3 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Autriche",
            "Opérateurs partenaires": "T-MOBILE",
            " Appel entrant  ": "5 900",
            " Appel local ": "4 300",
            " Appel vers Mada  ": "12 100",
            " Appel vers autres destinations ": "12 100",
            " SMS sortant vers toutes destinations ": "2 100",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Grèce",
            "Opérateurs partenaires": "COSMOTE",
            " Appel entrant  ": "8 500",
            " Appel local ": "3 200",
            " Appel vers Mada  ": "23 400",
            " Appel vers autres destinations ": "23 400",
            " SMS sortant vers toutes destinations ": "2 000",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "RWANDA",
            "Opérateurs partenaires": "BHARTI AIRTEL",
            " Appel entrant  ": "8 800",
            " Appel local ": "1 800",
            " Appel vers Mada  ": "8 200",
            " Appel vers autres destinations ": "31 000",
            " SMS sortant vers toutes destinations ": "900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "JAPON",
            "Opérateurs partenaires": "NTT",
            " Appel entrant  ": "200",
            " Appel local ": "4 300",
            " Appel vers Mada  ": "12 100",
            " Appel vers autres destinations ": "36 000",
            " SMS sortant vers toutes destinations ": "1 800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "TOGO",
            "Opérateurs partenaires": "TOGOCEL",
            " Appel entrant  ": "6 300",
            " Appel local ": "3 700",
            " Appel vers Mada  ": "6 900",
            " Appel vers autres destinations ": "37 100",
            " SMS sortant vers toutes destinations ": "2 000",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "MAURITANIE",
            "Opérateurs partenaires": "MATTEL",
            " Appel entrant  ": "11 800",
            " Appel local ": "7 800",
            " Appel vers Mada  ": "31 299",
            " Appel vers autres destinations ": "77 800",
            " SMS sortant vers toutes destinations ": "3 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "USA",
            "Opérateurs partenaires": "UNION",
            " Appel entrant  ": "15 300",
            " Appel local ": "15 200",
            " Appel vers Mada  ": "30 500",
            " Appel vers autres destinations ": "30 500",
            " SMS sortant vers toutes destinations ": "2 700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Luxembourg",
            "Opérateurs partenaires": "TANGO",
            " Appel entrant  ": "7 100",
            " Appel local ": "6 300",
            " Appel vers Mada  ": "23 900",
            " Appel vers autres destinations ": "23 900",
            " SMS sortant vers toutes destinations ": "1 800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Guinée Equatoriale",
            "Opérateurs partenaires": "MUNI GREENCOM",
            " Appel entrant  ": "2 900",
            " Appel local ": "2 500",
            " Appel vers Mada  ": "21 300",
            " Appel vers autres destinations ": "26 500",
            " SMS sortant vers toutes destinations ": "2 000",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Italie",
            "Opérateurs partenaires": "ILIAD",
            " Appel entrant  ": "9 100",
            " Appel local ": "7 200",
            " Appel vers Mada  ": "18 400",
            " Appel vers autres destinations ": "18 400",
            " SMS sortant vers toutes destinations ": "2 100",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Grèce",
            "Opérateurs partenaires": "COSMOTE",
            " Appel entrant  ": "8 900",
            " Appel local ": "3 800",
            " Appel vers Mada  ": "25 100",
            " Appel vers autres destinations ": "25 100",
            " SMS sortant vers toutes destinations ": "2 100",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Tunisie",
            "Opérateurs partenaires": "ORANGE",
            " Appel entrant  ": "25 300",
            " Appel local ": "20 700",
            " Appel vers Mada  ": "35 000",
            " Appel vers autres destinations ": "35 000",
            " SMS sortant vers toutes destinations ": "9 700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Indonesie",
            "Opérateurs partenaires": "XL AXIATA",
            " Appel entrant  ": "2 100",
            " Appel local ": "3 600",
            " Appel vers Mada  ": "15 600",
            " Appel vers autres destinations ": "26 900",
            " SMS sortant vers toutes destinations ": "700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "France",
            "Opérateurs partenaires": "FREE",
            " Appel entrant  ": "1 100",
            " Appel local ": "3 800",
            " Appel vers Mada  ": "3 800",
            " Appel vers autres destinations ": "3 800",
            " SMS sortant vers toutes destinations ": "900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "France",
            "Opérateurs partenaires": "BOUYGUES",
            " Appel entrant  ": "8 600",
            " Appel local ": "8 500",
            " Appel vers Mada  ": "29 800",
            " Appel vers autres destinations ": "38 700",
            " SMS sortant vers toutes destinations ": "2 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "France",
            "Opérateurs partenaires": "BOUYGUES",
            " Appel entrant  ": "8 600",
            " Appel local ": "8 500",
            " Appel vers Mada  ": "29 800",
            " Appel vers autres destinations ": "38 700",
            " SMS sortant vers toutes destinations ": "2 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "France",
            "Opérateurs partenaires": "ORANGE",
            " Appel entrant  ": "10 400",
            " Appel local ": "9 400",
            " Appel vers Mada  ": "39 900",
            " Appel vers autres destinations ": "39 900",
            " SMS sortant vers toutes destinations ": "2 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "France",
            "Opérateurs partenaires": "SFR",
            " Appel entrant  ": "5 100",
            " Appel local ": "6 400",
            " Appel vers Mada  ": "39 100",
            " Appel vers autres destinations ": "39 100",
            " SMS sortant vers toutes destinations ": "2 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "MAURICE",
            "Opérateurs partenaires": "MTML",
            " Appel entrant  ": "1 800",
            " Appel local ": "2 300",
            " Appel vers Mada  ": "13 300",
            " Appel vers autres destinations ": "13 300",
            " SMS sortant vers toutes destinations ": "800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "MAURICE",
            "Opérateurs partenaires": "MY.T ORANGE",
            " Appel entrant  ": "6 600",
            " Appel local ": "2 300",
            " Appel vers Mada  ": "9 200",
            " Appel vers autres destinations ": "13 300",
            " SMS sortant vers toutes destinations ": "2 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "UAE",
            "Opérateurs partenaires": "ETISALAT",
            " Appel entrant  ": "27 500",
            " Appel local ": "18 900",
            " Appel vers Mada  ": "50 600",
            " Appel vers autres destinations ": "98 000",
            " SMS sortant vers toutes destinations ": "4 100",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "AFRIQUE DU SUD",
            "Opérateurs partenaires": "MTN",
            " Appel entrant  ": "6 000",
            " Appel local ": "3 200",
            " Appel vers Mada  ": "6 200",
            " Appel vers autres destinations ": "13 400",
            " SMS sortant vers toutes destinations ": "1 600",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "LA REUNION",
            "Opérateurs partenaires": "TELCO OI",
            " Appel entrant  ": "11 700",
            " Appel local ": "4 500",
            " Appel vers Mada  ": "17 800",
            " Appel vers autres destinations ": "26 700",
            " SMS sortant vers toutes destinations ": "2 200",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "LA REUNION",
            "Opérateurs partenaires": "ORANGE",
            " Appel entrant  ": "3 000",
            " Appel local ": "4 000",
            " Appel vers Mada  ": "16 900",
            " Appel vers autres destinations ": "17 400",
            " SMS sortant vers toutes destinations ": "1 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Italie",
            "Opérateurs partenaires": "WIND TRE",
            " Appel entrant  ": "15 000",
            " Appel local ": "11 100",
            " Appel vers Mada  ": "30 200",
            " Appel vers autres destinations ": "30 200",
            " SMS sortant vers toutes destinations ": "2 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "KENYA",
            "Opérateurs partenaires": "TELKOM",
            " Appel entrant  ": "4 200",
            " Appel local ": "2 800",
            " Appel vers Mada  ": "13 400",
            " Appel vers autres destinations ": "16 000",
            " SMS sortant vers toutes destinations ": "1 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "IRAN",
            "Opérateurs partenaires": "MTN",
            " Appel entrant  ": "3 500",
            " Appel local ": "3 700",
            " Appel vers Mada  ": "22 900",
            " Appel vers autres destinations ": "26 000",
            " SMS sortant vers toutes destinations ": "1 700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Italie",
            "Opérateurs partenaires": "H3G",
            " Appel entrant  ": "27 800",
            " Appel local ": "20 900",
            " Appel vers Mada  ": "41 800",
            " Appel vers autres destinations ": "41 800",
            " SMS sortant vers toutes destinations ": "20 900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "RUSSIE",
            "Opérateurs partenaires": "MEGAFON",
            " Appel entrant  ": "17 600",
            " Appel local ": "32 800",
            " Appel vers Mada  ": "53 300",
            " Appel vers autres destinations ": "35 300",
            " SMS sortant vers toutes destinations ": "3 700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "RUSSIE",
            "Opérateurs partenaires": "BEELINE VEON",
            " Appel entrant  ": "12 400",
            " Appel local ": "24 700",
            " Appel vers Mada  ": "40 100",
            " Appel vers autres destinations ": "49 600",
            " SMS sortant vers toutes destinations ": "3 400",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "CANADA",
            "Opérateurs partenaires": "ROGERS",
            " Appel entrant  ": "25 300",
            " Appel local ": "18 400",
            " Appel vers Mada  ": "26 100",
            " Appel vers autres destinations ": "46 200",
            " SMS sortant vers toutes destinations ": "12 100",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "CANADA",
            "Opérateurs partenaires": "TELUS",
            " Appel entrant  ": "14 100",
            " Appel local ": "14 100",
            " Appel vers Mada  ": "22 400",
            " Appel vers autres destinations ": "39 100",
            " SMS sortant vers toutes destinations ": "2 100",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "ARABIE SAOUDITE",
            "Opérateurs partenaires": "STC",
            " Appel entrant  ": "9 500",
            " Appel local ": "8 200",
            " Appel vers Mada  ": "46 400",
            " Appel vers autres destinations ": "46 400",
            " SMS sortant vers toutes destinations ": "3 800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "TANZANIE",
            "Opérateurs partenaires": "ZANTEL",
            " Appel entrant  ": "5 800",
            " Appel local ": "4 000",
            " Appel vers Mada  ": "27 800",
            " Appel vers autres destinations ": "27 800",
            " SMS sortant vers toutes destinations ": "2 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Maroc",
            "Opérateurs partenaires": "WANA",
            " Appel entrant  ": "17 200",
            " Appel local ": "8 400",
            " Appel vers Mada  ": "46 300",
            " Appel vers autres destinations ": "50 500",
            " SMS sortant vers toutes destinations ": "3 400",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Turquie",
            "Opérateurs partenaires": "AVEA",
            " Appel entrant  ": "22 300",
            " Appel local ": "7 500",
            " Appel vers Mada  ": "42 500",
            " Appel vers autres destinations ": "116 800",
            " SMS sortant vers toutes destinations ": "2 900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Qatar",
            "Opérateurs partenaires": "VODAFONE",
            " Appel entrant  ": "16 300",
            " Appel local ": "7 500",
            " Appel vers Mada  ": "18 300",
            " Appel vers autres destinations ": "18 300",
            " SMS sortant vers toutes destinations ": "2 600",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Portugal ",
            "Opérateurs partenaires": "VODAFONE",
            " Appel entrant  ": "9 700",
            " Appel local ": "5 000",
            " Appel vers Mada  ": "18 000",
            " Appel vers autres destinations ": "18 000",
            " SMS sortant vers toutes destinations ": "2 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Portugal ",
            "Opérateurs partenaires": "MEO MTN",
            " Appel entrant  ": "9 500",
            " Appel local ": "5 000",
            " Appel vers Mada  ": "22 500",
            " Appel vers autres destinations ": "22 500",
            " SMS sortant vers toutes destinations ": "2 500",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Nigéria",
            "Opérateurs partenaires": "GLOBACOM",
            " Appel entrant  ": "8 500",
            " Appel local ": "3 200",
            " Appel vers Mada  ": "27 600",
            " Appel vers autres destinations ": "27 600",
            " SMS sortant vers toutes destinations ": "2 400",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Irlande ",
            "Opérateurs partenaires": "VODAFONE",
            " Appel entrant  ": "200",
            " Appel local ": "2 900",
            " Appel vers Mada  ": "24 000",
            " Appel vers autres destinations ": "24 000",
            " SMS sortant vers toutes destinations ": "1 800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Irlande",
            "Opérateurs partenaires": "METEOR",
            " Appel entrant  ": "200",
            " Appel local ": "3 200",
            " Appel vers Mada  ": "7 200",
            " Appel vers autres destinations ": "7 200",
            " SMS sortant vers toutes destinations ": "200",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Gambie",
            "Opérateurs partenaires": "AFRICELL",
            " Appel entrant  ": "3 500",
            " Appel local ": "8 300",
            " Appel vers Mada  ": "18 600",
            " Appel vers autres destinations ": "18 600",
            " SMS sortant vers toutes destinations ": "4 600",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Mexique",
            "Opérateurs partenaires": "TELCEL",
            " Appel entrant  ": "5 500",
            " Appel local ": "5 300",
            " Appel vers Mada  ": "13 600",
            " Appel vers autres destinations ": "17 400",
            " SMS sortant vers toutes destinations ": "1 900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Malte",
            "Opérateurs partenaires": "EPIC",
            " Appel entrant  ": "200",
            " Appel local ": "3 200",
            " Appel vers Mada  ": "7 200",
            " Appel vers autres destinations ": "7 200",
            " SMS sortant vers toutes destinations ": "200",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Chypre",
            "Opérateurs partenaires": "EPIC",
            " Appel entrant  ": "700",
            " Appel local ": "3 200",
            " Appel vers Mada  ": "7 200",
            " Appel vers autres destinations ": "7 200",
            " SMS sortant vers toutes destinations ": "200",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Suisse",
            "Opérateurs partenaires": "SALT",
            " Appel entrant  ": "4 200",
            " Appel local ": "3 200",
            " Appel vers Mada  ": "7 200",
            " Appel vers autres destinations ": "7 200",
            " SMS sortant vers toutes destinations ": "200",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Liechtenstein",
            "Opérateurs partenaires": "SALT",
            " Appel entrant  ": "3 200",
            " Appel local ": "3 200",
            " Appel vers Mada  ": "7 200",
            " Appel vers autres destinations ": "7 200",
            " SMS sortant vers toutes destinations ": "200",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Oman",
            "Opérateurs partenaires": "Ooredoo",
            " Appel entrant  ": "11 700",
            " Appel local ": "7 600",
            " Appel vers Mada  ": "26 400",
            " Appel vers autres destinations ": "26 400",
            " SMS sortant vers toutes destinations ": "3 000",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Espagne ",
            "Opérateurs partenaires": "TME",
            " Appel entrant  ": "4 200",
            " Appel local ": "7 200",
            " Appel vers Mada  ": "7 200",
            " Appel vers autres destinations ": "7 200",
            " SMS sortant vers toutes destinations ": "900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Espagne",
            "Opérateurs partenaires": "ORANGE",
            " Appel entrant  ": "15 000",
            " Appel local ": "12 000",
            " Appel vers Mada  ": "28 100",
            " Appel vers autres destinations ": "28 100",
            " SMS sortant vers toutes destinations ": "1 900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Royaume-Uni",
            "Opérateurs partenaires": "TELEFONICA",
            " Appel entrant  ": "2 600",
            " Appel local ": "4 100",
            " Appel vers Mada  ": "4 100",
            " Appel vers autres destinations ": "4 100",
            " SMS sortant vers toutes destinations ": "900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Indonésie",
            "Opérateurs partenaires": "HUTCHISON",
            " Appel entrant  ": "2 000",
            " Appel local ": "3 400",
            " Appel vers Mada  ": "16 200",
            " Appel vers autres destinations ": "27 800",
            " SMS sortant vers toutes destinations ": "700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Tanzanie",
            "Opérateurs partenaires": "TIGO",
            " Appel entrant  ": "11 400",
            " Appel local ": "6 700",
            " Appel vers Mada  ": "25 600",
            " Appel vers autres destinations ": "30 100",
            " SMS sortant vers toutes destinations ": "3 700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Maroc",
            "Opérateurs partenaires": "ORANGE (Meditell)",
            " Appel entrant  ": "13 800",
            " Appel local ": "11 700",
            " Appel vers Mada  ": "39 700",
            " Appel vers autres destinations ": "49 100",
            " SMS sortant vers toutes destinations ": "3 400",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Bénin ",
            "Opérateurs partenaires": "ETISALAT",
            " Appel entrant  ": "11 500",
            " Appel local ": "3 000",
            " Appel vers Mada  ": "8 900",
            " Appel vers autres destinations ": "27 100",
            " SMS sortant vers toutes destinations ": "1 400",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Mozambique",
            "Opérateurs partenaires": "MCEL",
            " Appel entrant  ": "5 800",
            " Appel local ": "4 700",
            " Appel vers Mada  ": "13 100",
            " Appel vers autres destinations ": "26 200",
            " SMS sortant vers toutes destinations ": "1 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Zambie",
            "Opérateurs partenaires": "ZAMTEL",
            " Appel entrant  ": "2 500",
            " Appel local ": "3 400",
            " Appel vers Mada  ": "9 800",
            " Appel vers autres destinations ": "11 600",
            " SMS sortant vers toutes destinations ": "1 600",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Congo",
            "Opérateurs partenaires": "VODACOM",
            " Appel entrant  ": "5 900",
            " Appel local ": "6 900",
            " Appel vers Mada  ": "18 200",
            " Appel vers autres destinations ": "18 200",
            " SMS sortant vers toutes destinations ": "1 600",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Uganda",
            "Opérateurs partenaires": "MTN",
            " Appel entrant  ": "1 900",
            " Appel local ": "3 800",
            " Appel vers Mada  ": "34 100",
            " Appel vers autres destinations ": "53 000",
            " SMS sortant vers toutes destinations ": "1 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Niger ",
            "Opérateurs partenaires": "MOOV",
            " Appel entrant  ": "6 100",
            " Appel local ": "5 300",
            " Appel vers Mada  ": "31 700",
            " Appel vers autres destinations ": "31 700",
            " SMS sortant vers toutes destinations ": "2 200",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Algérie",
            "Opérateurs partenaires": "OOREDOO",
            " Appel entrant  ": "10 000",
            " Appel local ": "3 200",
            " Appel vers Mada  ": "23 300",
            " Appel vers autres destinations ": "37 000",
            " SMS sortant vers toutes destinations ": "4 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Sierra Leone ",
            "Opérateurs partenaires": "AFRICELL",
            " Appel entrant  ": "3 100",
            " Appel local ": "3 200",
            " Appel vers Mada  ": "7 800",
            " Appel vers autres destinations ": "44 400",
            " SMS sortant vers toutes destinations ": "1 600",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Corée du Sud",
            "Opérateurs partenaires": "KTC",
            " Appel entrant  ": "13 400",
            " Appel local ": "6 300",
            " Appel vers Mada  ": "19 000",
            " Appel vers autres destinations ": "49 700",
            " SMS sortant vers toutes destinations ": "2 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Royaume-Uni",
            "Opérateurs partenaires": "MANX",
            " Appel entrant  ": "6 630",
            " Appel local ": "5 200",
            " Appel vers Mada  ": "15 600",
            " Appel vers autres destinations ": "15 600",
            " SMS sortant vers toutes destinations ": "1 100",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Suisse",
            "Opérateurs partenaires": "SUNRISE",
            " Appel entrant  ": "13 900",
            " Appel local ": "14 100",
            " Appel vers Mada  ": "35 700",
            " Appel vers autres destinations ": "35 700",
            " SMS sortant vers toutes destinations ": "3 000",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Turquie",
            "Opérateurs partenaires": "VODAFONE",
            " Appel entrant  ": "14 300",
            " Appel local ": "5 500",
            " Appel vers Mada  ": "31 100",
            " Appel vers autres destinations ": "31 100",
            " SMS sortant vers toutes destinations ": "2 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Malaisie",
            "Opérateurs partenaires": "CELCOM",
            " Appel entrant  ": "9 400",
            " Appel local ": "7 500",
            " Appel vers Mada  ": "26 200",
            " Appel vers autres destinations ": "35 500",
            " SMS sortant vers toutes destinations ": "4 100",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Australie",
            "Opérateurs partenaires": "VODAFONE",
            " Appel entrant  ": "5 300",
            " Appel local ": "5 100",
            " Appel vers Mada  ": "35 400",
            " Appel vers autres destinations ": "35 400",
            " SMS sortant vers toutes destinations ": "2 200",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Philippines",
            "Opérateurs partenaires": "SMART",
            " Appel entrant  ": "2 900",
            " Appel local ": "2 000",
            " Appel vers Mada  ": "31 300",
            " Appel vers autres destinations ": "31 300",
            " SMS sortant vers toutes destinations ": "2 000",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Philippines",
            "Opérateurs partenaires": "GLOBE TELECOM",
            " Appel entrant  ": "3 000",
            " Appel local ": "2 200",
            " Appel vers Mada  ": "30 700",
            " Appel vers autres destinations ": "30 700",
            " SMS sortant vers toutes destinations ": "1 800",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Nouvelle-Calédonie",
            "Opérateurs partenaires": "OPT",
            " Appel entrant  ": "1 700",
            " Appel local ": "3 400",
            " Appel vers Mada  ": "26 100",
            " Appel vers autres destinations ": "26 100",
            " SMS sortant vers toutes destinations ": "2 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Luxembourg",
            "Opérateurs partenaires": "POST",
            " Appel entrant  ": "5 600",
            " Appel local ": "4 700",
            " Appel vers Mada  ": "16 100",
            " Appel vers autres destinations ": "16 100",
            " SMS sortant vers toutes destinations ": "2 700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Tanzanie",
            "Opérateurs partenaires": "TIGO",
            " Appel entrant  ": "11 800",
            " Appel local ": "7 000",
            " Appel vers Mada  ": "26 500",
            " Appel vers autres destinations ": "31 200",
            " SMS sortant vers toutes destinations ": "3 900",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Lettonie",
            "Opérateurs partenaires": "LMT",
            " Appel entrant  ": "3 900",
            " Appel local ": "2 500",
            " Appel vers Mada  ": "16 500",
            " Appel vers autres destinations ": "25 300",
            " SMS sortant vers toutes destinations ": "1 600",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Croatie",
            "Opérateurs partenaires": "A1 Hrvatska d.o.o",
            " Appel entrant  ": "11 300",
            " Appel local ": "6 700",
            " Appel vers Mada  ": "23 100",
            " Appel vers autres destinations ": "23 100",
            " SMS sortant vers toutes destinations ": "2 700",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Autriche",
            "Opérateurs partenaires": "H3G",
            " Appel entrant  ": "5 800",
            " Appel local ": "4 900",
            " Appel vers Mada  ": "16 000",
            " Appel vers autres destinations ": "16 000",
            " SMS sortant vers toutes destinations ": "2 300",
            " SMS entrant  ": "Gratuit "
        },
        {
            "Pays": "Islande",
            "Opérateurs partenaires": "NOVA",
            " Appel entrant  ": "700",
            " Appel local ": "2 300",
            " Appel vers Mada  ": "17 800",
            " Appel vers autres destinations ": "26 600",
            " SMS sortant vers toutes destinations ": "1 400",
            " SMS entrant  ": "Gratuit "
        }
    ];

    $('#country-filter option').each(function(index, _this){
        let _val = $(_this).text();
        $(_this).attr('value', _val);

        if (map[this.value]) {
            $(this).remove();
        }
        map[this.value] = true;
    });

    select.append(select.find("option").remove().sort(function(a, b) {
      var at = $(a).text(),
        bt = $(b).text();
      return (at > bt) ? 1 : ((at < bt) ? -1 : 0);
    }));

    constructTable('#tarif-outbound');   

    tb.hide(); ld.hide();

    select.change( function(){
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