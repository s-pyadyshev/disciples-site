export const toggleByClass = (buttons, buildBtnLength, town) => {
  const buildClassLength = 6;

  buttons.forEach((item, index) => {
      buttons[index].addEventListener('click', function() {
          let self = this;

          if (self.classList.contains('is-active') === false) {
              let btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -buildBtnLength);
              let imgClass = town.querySelector('.' + btnClass);

              self.classList.add('is-active');
              imgClass.style.display = 'block';

          } else if (self.classList.contains('is-active') === true) {
              let btnClass = self.getAttribute('class').substr(buildClassLength).slice(0, -(10 + buildBtnLength));
              let imgClass = town.querySelector('.' + btnClass);

              self.classList.remove('is-active');
              imgClass.style.display = 'none';
          }
      });
  });
}

export default toggleByClass;
