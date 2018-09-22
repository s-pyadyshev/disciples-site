import toggleByClass from './toggleByClass';

export const buildTown = (town, build) => {
    var town = document.querySelector(town);
    var buildBtnLength = build.length;
    var buildClassLength = 6;

    const getBuildButtons = () => {
        const buildBtns = document.querySelectorAll(build);
        let buildBtnArray = [];

        for (var i = buildBtns.length; i--; buildBtnArray.unshift(buildBtns[i]));

        return buildBtnArray;
    }

    const buildButtons = getBuildButtons();

    // for (var i = 0; i < buildButtons.length; i++) {
        
    //     buildButtons[i].addEventListener('click', function() {
    //         var self = this;

    //         if (self.classList.contains('is-active') === false) {
    //             var btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -buildBtnLength);
    //             var imgClass = town.querySelector('.' + btnClass);

    //             self.classList.add('is-active');
    //             imgClass.style.display = 'block';

    //         } else if (self.classList.contains('is-active') === true) {
    //             var btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -(10 + buildBtnLength));
    //             var imgClass = town.querySelector('.' + btnClass);

    //             self.classList.remove('is-active');
    //             imgClass.style.display = 'none';
    //         }
    //     });
    // };
    toggleByClass(buildButtons, buildBtnLength, buildClassLength, town);
};

export const townName = "Empire";

export default buildTown