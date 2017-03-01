function buildTown(town) {
    var town = document.querySelector(town);
    var buildBtn = document.querySelectorAll('.b-build');

    for (var i = 0; i < buildBtn.length; i++) {
        buildBtn[i].addEventListener('click', function() {
            var self = this;

            if (self.classList.contains('is-active') === false) {
                var btnClass = self.getAttribute('class').substr(8);
                var imgClass = self.querySelector('.' + btnClass);

                self.classList.add('is-active');
                imgClass.style.display = 'block';

            } else if (self.classList.contains('is-active') === true) {
                var btnClass = self.classList.remove('is-active').getAttribute('class').substr(8);
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.remove('is-active');
                imgClass.style.display = 'none';
            }
        });
    }
}

buildTown('.b-empire');
