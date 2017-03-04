function buildTown(town, build) {
    var town = document.querySelector(town); // container of images
    var buildBtns = document.querySelectorAll(build); // all build buttons for certain race
    var buildBtnLength = build.length;

    var buildBtnArray = [];

    for (var i = buildBtns.length; i--; buildBtnArray.unshift(buildBtns[i])); // push all buttons classes to array

    for (var i = 0; i < buildBtnArray.length; i++) {

        buildBtnArray[i].addEventListener('click', function() {
            var self = this;

            if (self.classList.contains('is-active') === false) {
                var btnClass = self.getAttribute('class').substr(8).slice(0, -buildBtnLength);
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.add('is-active');
                imgClass.style.display = 'block';

            } else if (self.classList.contains('is-active') === true) {
                var btnClass = self.getAttribute('class').substr(8).slice(0, -(10 + buildBtnLength));
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.remove('is-active');
                imgClass.style.display = 'none';
            }
        });
    }
}

buildTown('.b-empire', '.b-build--empire');
buildTown('.b-undead', '.b-build--undead');
buildTown('.b-clans', '.b-build--clans');
buildTown('.b-legions', '.b-build--legions');

function savePicture(race, button) {
    var node = document.querySelector(race);

    document.querySelector(button).addEventListener('click', function() {
        domtoimage.toPng(node)
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    })
}

savePicture('.b-empire', '.b-btn--save-empire');
savePicture('.b-undead', '.b-btn--save-undead');
savePicture('.b-clans', '.b-btn--save-clans');
savePicture('.b-legions', '.b-btn--save-legions');


