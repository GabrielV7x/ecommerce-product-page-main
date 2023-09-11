//  Open the modal with the image clicked
function openModal() {
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
const thumbnailsLBox = [...document.querySelectorAll("#myModal .thumbnails img[src]")];

function becomeMainImg(img) {
  const mainImgLBox = document.querySelector("#myModal .main_image img[src]");

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

// Lightbox buttons to change the image
let slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);

}

function showSlides(n) {
  let thumbObj = {}
  const thumbnailsLBox = [...document.querySelectorAll("#myModal .thumbnails img[src]")];

  thumbnailsLBox.forEach(function(thumbnail, index) {
    // thumbObj[index] = thumbnail;
    index += 1;
    thumbObj[index] = thumbnail.getAttribute("src").replace("-thumbnail", "");
    thumbnail.parentNode.classList.remove("mainImg");
    console.log(thumbnailsLBox.length);

    if (n > thumbnailsLBox.length) {
      n = 1
    } else if (n < 1) {
      n = thumbnailsLBox.length
    }

    if (n === index) {
      slideIndex = n;
      const mainImgLBox = document.querySelector("#myModal .main_image img[src]");
      mainImgLBox.setAttribute("src", thumbObj[slideIndex]);
      thumbnail.parentNode.classList.add("mainImg");
    }

  })
}
