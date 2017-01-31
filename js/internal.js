$(document).ready(function() {

    function buildTown(town) {
        var town = town;

        $(".b-build").on("click", function(){
            var $this = $(this),
                $town = $(town);

            if ($this.hasClass("is-active") === false) {
                var btnClass = $this.attr("class").substr(8);
                var imgClass = $town.find("." + btnClass);

                $this.addClass("is-active");
                imgClass.show();
            } else if ($this.hasClass("is-active") === true) {
                var btnClass = $this.removeClass("is-active").attr("class").substr(8);
                var imgClass = $town.find("." + btnClass);

                $this.removeClass("is-active");
                imgClass.hide();
            }
        });
    }
});
