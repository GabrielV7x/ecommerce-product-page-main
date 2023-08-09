export default function product() {

  //  change the main img according to the thumbnials selected
  const mainImg = document.querySelector(".main_image img[src]");
  // const thumbContainers = [...document.querySelectorAll(".thumbnails div")];
  const thumbnails = [...document.querySelectorAll(".thumbnails img[src]")];
  console.log(thumbnails);

  function becomeMainImg(img) {
    img.addEventListener("click", function() {
      thumbnails.forEach(function(thumbnail) { // remove the mainImg class from all the thumbnails
        console.log(thumbnail.parentNode);
        thumbnail.parentNode.classList.remove("mainImg");
        thumbnail.style.opacity = "1";
      })

      const imgAttrValue = img.getAttribute("src"); // get the src attribute value of the thumbnail
      const bigImgPath = imgAttrValue.replace("-thumbnail", "");
      const mainImgAttrValue = mainImg.setAttribute("src", bigImgPath)

      img.style.opacity = "0.3";
      img.parentNode.classList.add("mainImg"); // add the mainImg class to the thumbnail clicked
    })
  }

  thumbnails.forEach(becomeMainImg)
}
