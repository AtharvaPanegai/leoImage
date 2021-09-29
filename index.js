/** @format */

function leoImage(options) {
  let images = document.querySelectorAll(".leoImage");

  if (options.shadowType === "hard") {
    options.shadowType = "0px";
  } else {
    options.shadowType = "15px";
  }

  images.forEach((image) => {
    images.style.boxShadow = `10px 10px ${options.shadowType} 1px rgba(0,0,0,0.15)`;

    if (options.padding) {
      image.style.padding = "1em";
    }
  });
}

module.exports.leoImage = leoImage;
