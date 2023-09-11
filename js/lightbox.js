// function test() {
//   console.log("tesyt");
// }

function openModal() {
  //  Open the modal with the image clicked
  const mainImg = document.querySelector(".product_container .main_image img[src]");
  const mainImgSrc = mainImg.getAttribute("src");
  let mainImgLBox = document.querySelector("#myModal .main_image img[src]");
  mainImgLBox = mainImgLBox.setAttribute("src", mainImgSrc)

  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

  //  change the main img according to the thumbnails selected
  const mainImgLBox = document.querySelector("#myModal .main_image img[src]");

  const thumbnailsLBox = [...document.querySelectorAll("#myModal .thumbnails img[src]")];

  function becomeMainImg(img) {
    img.addEventListener("click", function() {
      thumbnailsLBox.forEach(function(thumbnail) { // remove the mainImg class from all the thumbnails
        thumbnail.parentNode.classList.remove("mainImg");
        thumbnail.style.opacity = "1";
      })

      const imgAttrValue = img.getAttribute("src"); // get the src attribute value of the thumbnail
      const bigImgPath = imgAttrValue.replace("-thumbnail", "");
      const mainImgAttrValue = mainImgLBox.setAttribute("src", bigImgPath)

      // img.style.opacity = "0.3";
      img.parentNode.classList.add("mainImg"); // add the mainImg class to the thumbnail clicked
    })
  }

  thumbnailsLBox.forEach(becomeMainImg)
