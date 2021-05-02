import toggleByClass from "./toggleByClass";

export const buildTown = (town, build) => {
  const townElement = document.querySelector(town);
  const buildBtnLength = build.length;

  const getBuildButtons = () => {
    const buildBtns = document.querySelectorAll(build);
    let buildBtnArray = [];

    for (let i = buildBtns.length; i--; buildBtnArray.unshift(buildBtns[i])) {
      return buildBtnArray;
    }

    return buildBtnArray;
  };

  const buildButtons = getBuildButtons();

  toggleByClass(buildButtons, buildBtnLength, townElement);
};

export default buildTown;
