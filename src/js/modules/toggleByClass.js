export const toggleByClass = (buttons, buildBtnLength, buildClassLength, town) => {

    buttons.forEach((item, index) => {
        buttons[index].addEventListener('click', function() {
            var self = this;

            if (self.classList.contains('is-active') === false) {
                var btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -buildBtnLength);
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.add('is-active');
                imgClass.style.display = 'block';

            } else if (self.classList.contains('is-active') === true) {
                var btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -(10 + buildBtnLength));
                var imgClass = town.querySelector('.' + btnClass);

                self.classList.remove('is-active');
                imgClass.style.display = 'none';
            }
        });
    });
}

export default toggleByClass;
