import toggleByClass from './toggleByClass';

export const buildTown = (town, build) => {
    var town = document.querySelector(town);
    const buildBtnLength = build.length;

    const getBuildButtons = () => {
        const buildBtns = document.querySelectorAll(build);
        let buildBtnArray = [];

        for (let i = buildBtns.length; i--; buildBtnArray.unshift(buildBtns[i]));
        return buildBtnArray;
    }

    const buildButtons = getBuildButtons();

    toggleByClass(buildButtons, buildBtnLength, town);
};

export default buildTown;
