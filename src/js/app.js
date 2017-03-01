function buildTown(town) {
    var town = document.querySelector(town);
    var buildBtns = document.querySelectorAll('.b-build');
    var buildBtnArray = [];

    for (var i = buildBtns.length; i--; buildBtnArray.unshift(buildBtns[i]));

    for (var i = 0; i < buildBtnArray.length; i++) {

        buildBtnArray[i].addEventListener('click', function() {
            var self = this;

            if (self.classList.contains('is-active') === false) {
                var btnClass = self.getAttribute('class').substr(8);
                var imgClass = town.querySelector('.' + btnClass);
 
                self.classList.add('is-active');
                imgClass.style.display = 'block';

            } else if (self.classList.contains('is-active') === true) {
                var btnClass = self.getAttribute('class').substr(8).slice(0, -10);
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.remove('is-active');
                imgClass.style.display = 'none';
            }
        });
    }
}

buildTown('.b-empire');
