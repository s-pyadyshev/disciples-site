import * as htmlToImage from "html-to-image";

export const saveImage = (selector, buttonClass) => {
  const node = document.querySelector(selector);
  const button = document.querySelector(buttonClass);

  if (!node && !button) {
    return;
  }

  button.addEventListener("click", () => {
    htmlToImage.toJpeg(node, { quality: 0.95 }).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "disciples-2.jpeg";
      link.href = dataUrl;
      link.click();
    });
  });
};

export default saveImage;
