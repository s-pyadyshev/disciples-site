export const toggleByDataAttr = () => {
  const toggleButtons = document.querySelectorAll("[data-toggle]");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const self = this;
      const dataAttr = self.dataset.toggle;
      const toggleElement = document.querySelector(`.${dataAttr}`);

      self.classList.toggle("is-active");
      toggleElement.classList.toggle("is-active");
    });
  });
};

export default toggleByDataAttr;
