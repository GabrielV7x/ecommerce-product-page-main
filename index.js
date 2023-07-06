// menu hover
const lis =[...document.querySelectorAll("li")] ; //menu items

const menuAnimation = (li) => {
  li.addEventListener("mouseenter", function() {
    li.classList.add("show_li");
  });

  li.addEventListener("mouseleave", function() {
    li.classList.remove("show_li");
  });
};

lis.forEach(menuAnimation);



// Cart popup animation
const cart = document.querySelector(".cart"); // top right cart icon
const cartPopup = document.querySelector(".cart_popup"); // popup visible onclick of the cart icon

const cartPopupShow = (cart, cartPopup) => {
  cart.addEventListener("click", function() {
    if (cartPopup.style.display === "block") {
      console.log("test2");
      cartPopup.style.display = "none"
    } else {
      cartPopup.style.display = "block"
    }
  });
};

cartPopupShow(cart,cartPopup);


//  change the main img according to the thumbnials selected

const mainImg = document.querySelector(".main_image img[src]");
const thumbnails = [...document.querySelectorAll(".thumbnails img[src]")];

function becomeMainImg(img) {
  img.addEventListener("click", function() {
    imgAttrValue = img.getAttribute("src");
    const bigImgPath = imgAttrValue.replace("-thumbnail", "");
    mainImgAttrValue = mainImg.setAttribute("src", bigImgPath)
  })
}

thumbnails.forEach(becomeMainImg)
