var d2TownBuilderModule = (function() {

    // private methods
    var _yell = function() {
        console.log('I trusted you!');
    };

    // public methods
    var buildTown = function(town, build) {

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

    var thiefYell = function() {
        _yell();
    };

    return {
        buildTown: buildTown,
        thiefYell: thiefYell
    };

})();


d2TownBuilderModule.buildTown('.empire', '.build--empire');
d2TownBuilderModule.buildTown('.undead', '.build--undead');
d2TownBuilderModule.buildTown('.clans', '.build--clans');
d2TownBuilderModule.buildTown('.legions', '.build--legions');

var ModuleTwo = (function (d2TownBuilderModule) {

    d2TownBuilderModule.extension = function () {
        // another method!
    };
    
    return d2TownBuilderModule;

})(d2TownBuilderModule || {});

ModuleTwo.thiefYell();

var savePictureModule = (function () {
    var savePicture = function(race, button) {
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
    };

    return {
        savePicture: savePicture
    };

})();

savePictureModule.savePicture('.empire', '.btn--save-empire');
savePictureModule.savePicture('.undead', '.btn--save-undead');
savePictureModule.savePicture('.clans', '.btn--save-clans');
savePictureModule.savePicture('.legions', '.btn--save-legions');




