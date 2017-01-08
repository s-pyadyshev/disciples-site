// http://stackoverflow.com/questions/18307078/jquery-best-practises-in-case-of-document-ready

$(document).ready(function() {

    function buildTown(town) {
        var town = town;

        $(".b-build").on("click", function(){

            if ($(this).hasClass("is-active") === false) {
                var btnClass = $(this).attr("class").substr(8);
                var imgClass = $(town).find("." + btnClass);

                $(this).addClass("is-active");
                imgClass.show();
            } else if ($(this).hasClass("is-active") === true) {
                var btnClass = $(this).removeClass("is-active").attr("class").substr(8);
                var imgClass = $(town).find("." + btnClass);

                $(this).removeClass("is-active");
                imgClass.hide();
            }
        });
    }

    buildTown(".b-empire");

    // СКРИПТЫ, СРАБАТЫВАЮЩИЕ ПОСЛЕ ПОЛНОЙ ЗАГРУЗКИ СТРАНИЦЫ (фреймы, объекты, картинки)
    $(window).on("load", function () {

    });

    // СКРИПТЫ, СРАБАТЫВАЮЩИЕ ПРИ ИЗМЕНЕНИИ ОКНА ПРОСМОТРА
    $(window).on("resize", function () {

    });
});
