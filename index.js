/** @format */

function leoImage(options) {
  let images = document.querySelectorAll(".leoImage");

  if (options.shadowType === "hard") {
    options.shadowType = "0px";
  } else {
    options.shadowType = "15px";
  }

  if(options.roundedCorners=="hard"){
    options.roundedCorners = "0px";
  }else{
    options.roundedCorners = "10px";
  }

  if(options.circleImage = "hard"){
    options.circleImage = "0px";
  }else{
    options.circleImage = "50px";
  }

  



  images.forEach((image) => {
    images.style.boxShadow = `10px 10px ${options.shadowType} 1px rgba(0,0,0,0.15)`;
    images.style.borderRadius = `${options.roundedCorners}`;
    images.style.borderRadius = `${options.circleImage}`;

    if (options.padding) {
      image.style.padding = "1em";
    }
  });
}

module.exports.leoImage = leoImage;
