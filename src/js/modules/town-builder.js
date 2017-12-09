export const buildTown = (town, build) => {
    var town = document.querySelector(town); // container of images
    var buildBtns = document.querySelectorAll(build); // all build buttons for certain race
    var buildBtnLength = build.length;

    var buildBtnArray = [];

    for (var i = buildBtns.length; i--; buildBtnArray.unshift(buildBtns[i])); // push all buttons classes to array

    for (var i = 0; i < buildBtnArray.length; i++) {
        
        buildBtnArray[i].addEventListener('click', function() {
            var self = this;

            if (self.classList.contains('is-active') === false) {
                var btnClass = self.getAttribute('class').substr(6).slice(0, -buildBtnLength);
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.add('is-active');
                imgClass.style.display = 'block';

            } else if (self.classList.contains('is-active') === true) {
                var btnClass = self.getAttribute('class').substr(6).slice(0, -(10 + buildBtnLength));
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.remove('is-active');
                imgClass.style.display = 'none';
            }
        });
    };
};

export default buildTown
