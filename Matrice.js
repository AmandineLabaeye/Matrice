var Rond = $(".Rond");

var Carrer = $(".Carrer");

var Losange = $(".Losange");

function Reset () {

    $(".Forme").removeClass("background");

}

$("#VPB").click(function () {

    if ($(".Forme").hasClass("background")) {

        $(".Forme").addClass("background");

    } else {

        $(".Forme").addClass("background");

    }
});

$("#PVB").click(function () {

    Reset();

});

Rond.click(function () {

    $(this).toggleClass("background");

});

for (let i = 0; i < 5; i++ ) {

    $("#Carre" + i).click(function () {

        Reset();

        $(this).toggleClass("background");

        if ($(this).hasClass("background")) {

            $(".Ligne" + i).addClass("background")

        } else {

            $(".Ligne" + i).removeClass("background")

        }
    });
}

Losange.click(function () {

    Reset();

    $(this).toggleClass("background");

    if ($(this).hasClass("background")) {

        $(".Ligne2, .Colonne").addClass("background");

    } else  {

        $(".Ligne2, .Colonne").removeClass("background");

    }

});

